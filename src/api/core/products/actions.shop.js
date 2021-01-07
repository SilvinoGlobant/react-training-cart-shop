import apiAction from '../../action';
const reducer = 'products/load';

export default {
    get: () => apiAction({
        request: {
            url: 'http://localhost:8080/products',
            // params:{
            //     incl
            // }
        },
        reducer,
    }),
    getDetails: (productId) => apiAction({
        request: {
            url: `http://localhost:8080/products/${productId}`,
            // params:{
            //     incl
            // }
        },
        reducer,
        store: 'currentProductDetail'
    }),
}