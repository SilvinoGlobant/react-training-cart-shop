import { combineReducers } from 'redux';
import apiReducer from '../../../api/reducer';

export default combineReducers({
    api: combineReducers({
        core: combineReducers({
            products: combineReducers({
                list: apiReducer('products/load')
            })
        })
    })
})