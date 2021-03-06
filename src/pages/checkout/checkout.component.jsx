import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selector';
import  CheckoutItem  from '../../components/checkout-item/checkout-item.component';

import './checkout.styles.scss';
import StripeCheckoutButton  from '../../components/stripe-button/stripe-button.component';

const CheckoutPage = ({ cartItems, cartTotal }) => {
    return (
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='header-blocks'>
                    <span>Product</span>
                </div>
                <div className='header-blocks'>
                    <span>Description</span>
                </div>
                <div className='header-blocks'>
                    <span>Quantity</span>
                </div>
                <div className='header-blocks'>
                    <span>Price</span>
                </div>
                <div className='header-blocks'>
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map(cartItem => 
                   <CheckoutItem key={cartItem.id} cartItem={cartItem}></CheckoutItem>
                )
            }
            <div className='total'>
                <span>TOTAL: ${cartTotal}</span>
            </div>
            <div className='test-warning'>
                *Please use the following test card for payments*
                <br/>
                4242 42 42 4242 42 - Exp: 01/22 - CVV: 123
            </div>
            <StripeCheckoutButton price={cartTotal}/>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartTotal: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);