import { createSelector } from 'reselect';
//--------------Mini Selectors

const currentList = (state) => {
    return state.cart.api.core.products.list;
}

export const currentListSelector = createSelector(
    [currentList], (currentList) => {
        if (currentList) {
            return currentList;
        }
    }
)
const currentProduct = (state) => {
    return state.cart.api.core.products.currentProduct;
}

export const currentProductSelector = createSelector(
    [currentProduct], (currentProduct) => {
        if (currentProduct) {
            return currentProduct;
        }
    }
)
const currentPaymentProducts = (state) => {
    return state.cart.api.core.products.paymentProducts;
}

export const currentPaymentProductsSelector = createSelector(
    [currentPaymentProducts], (currentPaymentProducts) => {
        if (currentPaymentProducts) {
            return currentPaymentProducts;
        }
    }
)