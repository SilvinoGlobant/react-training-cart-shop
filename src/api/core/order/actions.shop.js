import apiAction from '../../action';
const reducer = 'order/new-orders';
const miData = {
    creditCardData: {},
    shippingData: {}
}
export default {

    createOrder: (order) => apiAction({
        request: {
            method: 'POST',
            url: `http://localhost:8080/order`,
            data: order
        },
        reducer,
    }),
}