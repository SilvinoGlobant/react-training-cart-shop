import { combineReducers } from 'redux';
import apiReducer from '../../api/reducer';

export default function module() {
    return {
        // unique id of module
        id: 'shopping_cart',

        // maps the Store key to the reducer

        reducerMap: {
            shopping_cart: combineReducers({
                api: combineReducers({
                    core: combineReducers({
                        user: apiReducer('core/user ')
                    })
                })
            })
        },
    };

}