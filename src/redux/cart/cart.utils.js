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

export const removeItemFromCart = (cartItems, cartitemToRemove) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartitemToRemove.id
    )

    if (existingCartItem.quantaty === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartitemToRemove.id)
    }

    return cartItems.map(
        cartItem => cartItem.id === cartitemToRemove.id ?
        { ...cartItem, cartitemToRemove, quantaty: cartItem.quantaty -1 }
        : cartItem
    )
}