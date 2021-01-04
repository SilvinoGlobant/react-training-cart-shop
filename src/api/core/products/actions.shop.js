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
    })
}