export default function localAction({ request, reducer, store, data, ...options }) {

    return (dispatch, getState, { api }) => {

        let { method } = request;
        method = method ? method.toUpperCase() : 'SET';

        dispatch({ type: `${method}: ${reducer}`, store });

        let response = {};
        response.status = 200;
        response.statusText = "OK";
        response.data = data;

        dispatch({ type: `${method}:${reducer}:SUCCESS`, store, response, ...options });

        return response;
    };
}
