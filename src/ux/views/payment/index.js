import React, { useReducer, useState } from 'react';
import FormPayment from '../../form_payment';
import ProductListPayment from '../../product_list_payment';
import createFormReducer from 'apps/libs/forms/reducer';


const initialFormState = {
    name: 'Silvino ',
    last_name: 'Rodriguez ',
    address: 'Ampliacion Santa Julia ',
    city: 'Pachuca de Soto ',
    state: 'Hidalgo ',
    zip_code: '',
    phone: 7713595210,
    credit_card_number: '4772',
    full_name: 'dsds',
    exp_date: 'dsds',
    cvv: 'dsdsd'


}
const formStateSlice = createFormReducer('cart/payment/products', initialFormState);


export default function Payment({ validateZip, validateCard, productListPayment, removeProduct, createOrder }) {

    const [formState, dispatchForm] = useReducer(formStateSlice.reducer, initialFormState);
    const [isValidZipCode, setIsValidZipCode] = useState(false);
    const [isValidCard, setIsValidCard] = useState(false);

    const handleChange = (event) => {
        if (event.target.name === 'zip_code') {
            validateZip(event.target.value)
                .then(response => {
                    if (response.data) {
                        setIsValidZipCode(true)
                    } else {

                        setIsValidZipCode(false)
                    }
                })
                .catch(err => {

                    setIsValidZipCode(false)
                });
        }
        if (event.target.name === 'credit_card_number') {
            validateCard(event.target.value)
                .then(response => {
                    if (response.data) {
                        setIsValidCard(true)
                    } else {

                        setIsValidCard(false)
                    }
                })
                .catch(err => {

                    setIsValidCard(false)
                });
        }
        dispatchForm(formStateSlice.actions.update({
            [event.target.name]: event.target.value
        }));
    }

    const handleSubmitOrder = () => {

        createOrder({
            shippingData: {
                address: formState.address,
                city: formState.city,
                state: formState.state,
                phoneNumber: formState.phone,
                fullName: formState.full_name,
                zipCode: formState.zip_code,

            },
            creditCardData: {
                creditCard: formState.credit_card_number,
                cvv: formState.cvv,
                expDate: formState.exp_date,
                fullName: formState.full_name
            }
        }).then(response => {

        })

    }
    return (
        <div className='payment d-flex w-100'>
            <FormPayment
                isValidZipCode={isValidZipCode}
                isValidCard={isValidCard}
                formState={formState}
                handleChange={handleChange}
            />
            <ProductListPayment
                productListPayment={productListPayment}
                removeProduct={removeProduct}
                handleSubmitOrder={handleSubmitOrder}
            />
        </div>
    )
}



