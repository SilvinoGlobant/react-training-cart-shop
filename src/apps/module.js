import { combineReducers } from 'redux';
import apiReducer from '../api/reducer';

export default function module() {
    return {
        // unique id of module
        id: 'shopping',

        // maps the Store key to the reducer

        reducerMap: {
            shopping: combineReducers({
                api: combineReducers({
                    core: combineReducers({
                        user: apiReducer('core/user ')
                    })
                })
            })
        },
    };

}