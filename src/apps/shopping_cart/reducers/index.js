import { combineReducers } from 'redux';
import apiReducer from '../../../api/reducer';

export default combineReducers({
    api: combineReducers({
        products: combineReducers({
            productsList: apiReducer('products/load')
        })
    })
})