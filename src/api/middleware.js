import thunk from 'redux-thunk';
import axios from 'axios';

export function createApi() {
    const api = axios.create();
    api.defaults.headers.common['Content-Type'] = 'aplication/json';
    api.defaults.withCredentials = false;

    return api;

}
export default function getApiMiddleware() {

    return thunk.withExtraArgument({ api: createApi() })

}