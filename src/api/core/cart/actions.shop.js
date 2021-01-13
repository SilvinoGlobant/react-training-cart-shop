import localAction from '../../action_local';
const reducer = 'cart/add/products';

export default {
    add: ({ product }) => localAction({
        request: {
            // url: 'http://localhost:8080/products',
            params: {
                product
            }
        },
        reducer,
        data: {
            product
        },
        append: product ? true : false,

    }),

}


