export default function apiReducer(name){
    
    return (state = {}, action) => {
        if(!action || !action.type || !action.type.includes(name)){
            return state; }
 
        const [reqMethod, reqReducer, reqState] = action.type.split(':');
 
        if(!reqMethod || !reqReducer){
            return state; }
 
        switch(reqState){
            case undefined:
                return requestStart({ state, ...action });
 
            case 'SUCCESS':
                return requestSuccess({ state, ...action });
 
            case 'ERROR':
                return requestError({ state, ...action });
 
            default:
                return state;
        }
    }
};
 
 
function getRequestState({ state, store }){
    if(store){
        if(Array.isArray(store)){
            return store.reduce( 
                (state, store) => state[store] || {}, 
                state);
        }
 
        return state[store] || {};
    }
 
    return state || {};
}
 
function mergeRequestState({ state, store, oldState, newState }){
    if(!store){
        return {
            ...state,
            ...oldState,
            ...newState
        };
    }
    
    if(Array.isArray(store)){
        const deepState = {};
        let thisOldState = state;
        const lastIndex = store.length - 1;
 
        store.reduce( (currentDeepState, store, index) => {
            let thisNewState;
            
            if(thisOldState){
                thisOldState = thisOldState[store]; }
 
            if(index === lastIndex){
                if(oldState){
                    thisOldState = oldState; }
 
                thisNewState = newState;
            }
 
            return currentDeepState[store] = {
                ...thisOldState,
                ...thisNewState
            };
 
        }, deepState);
 
        return {
            ...state,
            ...deepState
        };
    }
 
    return {
        ...state,
 
        [store]: {
            ...oldState,
            ...newState
        }
    };
}
 
 
function requestStart({ state, store }){
    
    const storedState = getRequestState({ state, store });
 
    const requestState = {
        isLoading: true,
        isError: false
    }
 
    return mergeRequestState({ state, store, 
        newState: requestState, oldState: storedState });
}
 
function requestSuccess({ state, store, response, ...options }){
    
    const storedState = getRequestState({ state, store });
 
    const requestState = {
        isLoading: false,
        isError: false,
        status: response.status,
    }
 
    storeResponse(requestState, response, storedState, options);
 
    return mergeRequestState({ state, store, 
        newState: requestState });
}
 
function requestError({ state, store, error }){
    
    const requestState = {
        isLoading: false,
        isError: true,
        error: error
    };
 
    if(error.response){
        requestState.status = error.response.status;
        if(error.response.data){
            requestState.error_data = error.response.data; }
    }
 
    return mergeRequestState({ state, store, 
        newState: requestState });
}
 
 
 
 
function storeResponse(requestState, response, storedState, options = {}){
    const data = response.data;
 
    let storedRecords = storedState.records;
 
    // let the action add/modify options after receiving a response
    if(options.onResponse){
        options.onResponse(response, options); }
 
    if(storedRecords && options.removeAt){
        let removeAt;
        
        // find a match 
        for(let indexAt = 0, length = storedRecords.length; indexAt < length; indexAt++){
            const record = storedRecords[indexAt];
            if(options.removeAt(record) === true){
                removeAt = indexAt;
                break;
            }
        }
 
        if(removeAt !== undefined){
            requestState.records = storedRecords = [
                ...storedRecords.slice(0, removeAt),
                ...storedRecords.slice(removeAt + 1)
            ];
        }
    }
 
    // nothing to do
    if(!data){
        return; }
 
    for(const property in data){
        if(property === 'meta'){
            requestState.meta = data[property];
            continue;
        }
 
        const value = data[property];
        
        if(Array.isArray(value)){
            if(options.prepend && storedRecords){
                // prepend existing records
                requestState.records = [
                    ...value,
                    ...storedRecords,
                ];
            
            }else if(options.append && storedRecords){
                // append existing records
                requestState.records = [
                    ...storedRecords,
                    ...value,
                ];
            
            }else{
                // save records
                requestState.records = Array.from(value);
            }
            
            continue;
        }
        
        // save simple record object
 
        if(storedRecords && (options.insertAt || options.replaceAt)){
            let removeAt;
            let insertAt;
            let append;
 
            if(options.insertAt){
                
                // find a match and insert there
                for(let indexAt = 0, length = storedRecords.length; indexAt < length; indexAt++){
                    const record = storedRecords[indexAt];
 
                    if(options.insertAt(record, value) === true){
                        insertAt = indexAt;
                        break;
                    }
                }
 
                if(insertAt === undefined){ 
                    append = true; }
 
            }else if(options.replaceAt){
                
                // find a match and insert there + remove record by id
                // after finding both we can break the loop
                for(let indexAt = 0, length = storedRecords.length; indexAt < length; indexAt++){
                    const record = storedRecords[indexAt];
                
                    if(record.id === value.id){
                        removeAt = indexAt;
                        
                        if(insertAt !== undefined){
                            break; }
                
                    }else if(insertAt === undefined && options.replaceAt(record, value) === true){
                        insertAt = indexAt;
                        
                        if(removeAt !== undefined){ 
                            insertAt--; 
                            break; }
                
                    }
                }
 
                if(insertAt === undefined){ 
                    append = true; }
            }
 
            if(removeAt !== undefined){
                requestState.records = storedRecords = [
                    ...storedRecords.slice(0, removeAt),
                    ...storedRecords.slice(removeAt + 1)
                ];
            }
 
            if(insertAt !== undefined){
                requestState.records = [
                    ...storedRecords.slice(0, insertAt),
                    value,
                    ...storedRecords.slice(insertAt)
                ];
 
            }else if(append === true){
                requestState.records = [
                    ...storedRecords,
                    value
                ];
            }
 
            continue;
        }
 
        if(options.indexBy && options.indexBy in value){
            requestState[
                value[options.indexBy] ] = value;
 
        }else{
            requestState.record = value;
        }
            
    }
}

