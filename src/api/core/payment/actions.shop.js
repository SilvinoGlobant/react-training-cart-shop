import apiAction from '../../action';
const reducer = 'payment/validate-form';

export default {
    validateZp: (zc) => apiAction({
        request: {
            method: 'POST',
            url: `http://localhost:8080/validate/zipcode/${zc}`,
            params: {
                zc
            }
        },
        reducer,
        store: 'zipCode'
    }),
    validateCard: (card) => apiAction({
        request: {
            method: 'POST',
            url: `http://localhost:8080/validate/creditcard/${card}`,
            params: {
                cc: card
            }
        },
        reducer,
        store: 'creditCard'
    }),
}