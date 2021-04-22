export const addItemToCart2 = (cartItems, cartItemsToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemsToAdd.id)

    if (existingCartItem) {
        return cartItems.map(cartItem => 
            cartItem.id === cartItemsToAdd.id
            ? { ...cartItem, quantaty: cartItem.quantaty + 1 }
            : { ...cartItem })
    }

    return [...cartItems, { ...cartItemsToAdd, quantaty: 1 }];
}