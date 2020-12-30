import { createStore as createDynamicStore } from 'redux-dynamic-modules-core';
import { composeWithDevTools } from 'redux-devtools-extension';
import getApiMiddleware from '../../api/middleware';
import getAplicationModule from './module';

export default function createStore() {

    return createDynamicStore({
        initialState: {},

        // thunk middleware for API async effects
        extensions: [{
            middleware: [getApiMiddleware()]
        }],
        advancedComposeEnhancers: composeWithDevTools({}),
    }, getAplicationModule());

}