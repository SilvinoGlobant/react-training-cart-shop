import { combineReducers } from 'redux';
import apiReducer from '../../../api/reducer';

export default combineReducers({
    api: combineReducers({
        core: combineReducers({
            products: combineReducers({
                list: apiReducer('products/load'),
                currentProduct: apiReducer('product/load-details'),
                paymentProducts: apiReducer('cart/add/products'),
                paymentValidations: apiReducer('payment/validate-form'),
            })
        })
    })
})