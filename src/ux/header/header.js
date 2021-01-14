import React from 'react';
import PropTypes from 'prop-types';
import shopping_cart from '../../assets/cart.svg'
import globant_shops from '../../assets/globant-shops.svg'

export default function Header({ handleCartView, navigateToShopping, productListPayment }) {

	let { records } = productListPayment;

	return (
		<div className="header bg-primary d-flex justify-content-between">
			<div className='globant-shops' onClick={navigateToShopping}>
				<img src={globant_shops} alt='globant_shops' />
			</div>
			<div className='shopping-cart' onClick={handleCartView}>
				<img src={shopping_cart} alt='shopping_cart' />
				<div className='shopping-cart-number-items'><span>{records?.length || 0}</span></div>
			</div>
		</div>
	);

}




