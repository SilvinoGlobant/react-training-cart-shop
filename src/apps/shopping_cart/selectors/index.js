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