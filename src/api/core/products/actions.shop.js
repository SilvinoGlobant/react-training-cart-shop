import apiAction from '../../action';
const reducer = 'products/load';

export default {
    get: ({ page }) => apiAction({
        request: {
            url: 'http://localhost:8080/products',
            params: {
                page
            }
        },
        reducer,
        append: page ? true : false,
        // prepend: gt ? true : false,
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


