import React, { useReducer } from 'react';
import createFormReducer from 'apps/libs/forms/reducer';

const initialFormState = {
    name: 'Silvino ',
    last_name: 'Rodriguez ',
    address: 'Ampliacion Santa Julia ',
    city: 'Pachuca de Soto ',
    state: 'Hidalgo ',
    zip_code: '42080 ',
    phone: 7713595210,
    credit_card_number: '3132 4565',
    full_name: 'dsds',
    exp_date: 'dsds',
    cvv: 'dsdsd'


}
const formStateSlice = createFormReducer('cart/payment/products', initialFormState);

export default function FormPayment() {

    const [formState, dispatchForm] = useReducer(formStateSlice.reducer, initialFormState);

    const handleChange = (event) => {
        dispatchForm(formStateSlice.actions.update({
            [event.target.name]: event.target.value
        }));
    }

    return (
        <div className='form-payment'>
            <form action="">

                <div className='shipping-title'>
                    <label >Shippisasng data:</label>
                </div>

                <div className='form-payment-shipping d-flex flex-wrap' >
                    <div className='form-payment-sizedm d-flex flex-column '>
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            name='name'
                            value={formState.name}
                            onChange={handleChange} />
                    </div>
                    <div className='form-payment-sized d-flex flex-column'>
                        <label htmlFor="last_name">Last Name</label>
                        <input
                            type="text"
                            name='last_name'
                            value={formState.last_name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='form-payment-sizedm d-flex flex-column '>
                        <label htmlFor="address">Address</label>
                        <input
                            type="text"
                            name='address'
                            value={formState.address}
                            onChange={handleChange} />
                    </div>
                    <div className='form-payment-sized d-flex flex-column'>
                        <label htmlFor="city">City</label>
                        <input
                            type="text"
                            name='city'
                            value={formState.city}
                            onChange={handleChange} />
                    </div>
                    <div className='form-payment-sizedm d-flex flex-column '>
                        <label htmlFor="state">State</label>
                        <input type="text"
                            name='state'
                            value={formState.state}
                            onChange={handleChange} />
                    </div>
                    <div className='form-payment-sized d-flex flex-column'>
                        <label htmlFor="zip_code">Zip Code</label>
                        <input
                            type="text"
                            name='zip_code'
                            value={formState.zip_code}
                            onChange={handleChange} />
                    </div>
                    <div className='form-payment-sizedm d-flex flex-column '>
                        <label htmlFor="phone">Phone Number</label>
                        <input
                            type="number"
                            name='phone'
                            value={formState.phone}
                            onChange={handleChange} />
                    </div>
                </div>
                <div className='shipping-card'>
                    <label>Credit Card data:</label>
                </div>
                <div className='form-payment-card d-flex flex-wrap' >
                    <div className='form-payment-sizedm d-flex flex-column '>
                        <label htmlFor="credit_card_number">Credit Card Number</label>
                        <input type="text"
                            name='credit_card_number'
                            value={formState.credit_card_number}
                            onChange={handleChange} />
                    </div>
                    <div className=' form-payment-sizedl w-100 d-flex flex-column'>
                        <label htmlFor="full_name">Full Name</label>
                        <input type="text"
                            name='full_name'
                            value={formState.full_name}
                            onChange={handleChange} />
                    </div>
                    <div className='form-payment-sizedm d-flex flex-column '>
                        <label htmlFor="exp_date">Exp. Date</label>
                        <input type="text"
                            name='exp_date'
                            value={formState.exp_date}
                            onChange={handleChange} />
                    </div>
                    <div className='form-payment-sized d-flex flex-column'>
                        <label htmlFor="cvv">CVV</label>
                        <input type="text"
                            name='cvv'
                            value={formState.cvv}
                            onChange={handleChange} />
                    </div>
                </div>

            </form>
        </div>
    )

}



