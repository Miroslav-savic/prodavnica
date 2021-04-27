import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IkyBVClc0JrTN4GsiRTrxMqKbPyzw3H9BdLYsn32kXG0VUc83jnw41WXJbo69rQEM58XDHu64iAd0LwSUHvt2ki00h9Xogycj';

    const onToken = token => {
        console.log(token);
        alert('Payment Succesufull');
    }
        return (
            <StripeCheckout 
                label='Pay now'
                name='Prodavnica'
                billingAddress
                shippingAddress
                image='https://svgshare.com/i/CUz.svg'
                description={`Your total price is $${price}`}
                amount={priceForStripe}
                panelLabel='Pay Now'
                token={onToken}
                stripeKey={publishableKey}
            />
        )
    }

export default StripeCheckoutButton;