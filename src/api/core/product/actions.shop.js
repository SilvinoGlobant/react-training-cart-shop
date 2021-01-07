import apiAction from '../../action';
const reducer = 'product/load-details';

export default {
    getDetails: (productId) => apiAction({
        request: {
            url: `http://localhost:8080/products/${productId}`,
            // params:{
            //     incl
            // }
        },
        reducer,
    }),
}