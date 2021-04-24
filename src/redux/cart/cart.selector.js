import { createSelector } from 'reselect';

const selectCart = state => {
    return (
        state.cart
    )
}

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems 
);

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((acc, curr) => {
        return acc + curr.quantaty
    }, 0)
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((acc, curr) => {
        return acc + curr.quantaty * curr.price
    }, 0)
)