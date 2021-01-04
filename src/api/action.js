import hash from 'object-hash';

const CACHE = {};

export default function apiAction({ request, reducer, store, ...options }) {

    if (typeof request === 'string') {
        request = { url: request };
    }

    if (request.cache === true) {
        options.cache = true;
    }

    return (dispatch, getState, { api }) => {
        let { method } = request;
        method = method ? method.toUpperCase() : 'GET';

        let hashKey, cache;

        if (options.cache === true) {
            cache = CACHE[reducer];
            if (!cache) { CACHE[reducer] = cache = {}; }

            hashKey = hash(request, { respectType: false });
            const promise = cache[hashKey];
            if (promise) { return promise; }
        }

        const promise = api({ ...request, withCredentials: false })
            .then(response => {
                dispatch({ type: `${method}:${reducer}:SUCCESS`, store, response, ...options });
                return response;
            })
            .catch((error, ...args) => {

                dispatch({ type: `${method}: ${reducer}: ERROR`, store, error });
                return Promise.resolve(error);
            });

        if (hashKey) {
            cache[hashKey] = promise;
        }

        dispatch({ type: `${method}: ${reducer}`, store });

        return promise;
    };
}