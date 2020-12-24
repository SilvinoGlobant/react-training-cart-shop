import React from 'react';
import PropTypes from 'prop-types';
import shopping_cart from '../../assets/cart.svg'
import globant_shops from '../../assets/globant-shops.svg'

export const Header = ({ user }) => (
	<header>
		<div className="header bg-primary d-flex justify-content-between">
			<div className='globant-shops'>
				<img src={globant_shops} />
			</div>

			<div className='shopping-cart'>
				<img src={shopping_cart} />
				<div className='shopping-cart-number-items'><span>3</span></div>
			</div>

		</div>
	</header>
);

Header.propTypes = {
	user: PropTypes.shape({}),

};

Header.defaultProps = {
	user: null,
};
