import React from 'react';

export default function FormPayment() {
    return (
        <div className='form-payment'>
            <form action="">

                <div className='shipping-title'>
                    <label >Shipping data:</label>
                </div>

                <div className='form-payment-shipping d-flex flex-wrap' >
                    <div className='form-payment-sizedm d-flex flex-column '>
                        <label htmlFor="name">Name</label>
                        <input type="text" />
                    </div>
                    <div className='form-payment-sized d-flex flex-column'>
                        <label htmlFor="last-name">Last Name</label>
                        <input type="text" />
                    </div>
                    <div className='form-payment-sizedm d-flex flex-column '>
                        <label htmlFor="address">Address</label>
                        <input type="text" />
                    </div>
                    <div className='form-payment-sized d-flex flex-column'>
                        <label htmlFor="city">City</label>
                        <input type="text" />
                    </div>
                    <div className='form-payment-sizedm d-flex flex-column '>
                        <label htmlFor="state">State</label>
                        <input type="text" />
                    </div>
                    <div className='form-payment-sized d-flex flex-column'>
                        <label htmlFor="zp">Zip Code</label>
                        <input type="text" />
                    </div>
                    <div className='form-payment-sizedm d-flex flex-column '>
                        <label htmlFor="phone">Phone Number</label>
                        <input type="text" />
                    </div>
                </div>
                <div className='shipping-card'>
                    <label>Credit Card data:</label>
                </div>
                <div className='form-payment-card d-flex flex-wrap' >
                    <div className='form-payment-sizedm d-flex flex-column '>
                        <label htmlFor="name">Credit Card Number</label>
                        <input type="text" />
                    </div>
                    <div className=' form-payment-sizedl w-100 d-flex flex-column'>
                        <label htmlFor="name">Full Name</label>
                        <input type="text" />
                    </div>
                    <div className='form-payment-sizedm d-flex flex-column '>
                        <label htmlFor="name">Exp. Date</label>
                        <input type="text" />
                    </div>
                    <div className='form-payment-sized d-flex flex-column'>
                        <label htmlFor="name">CVV</label>
                        <input type="text" />
                    </div>
                </div>

            </form>
        </div>
    )

}



