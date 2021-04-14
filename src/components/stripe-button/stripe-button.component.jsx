import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_6HGRa2tY049q7MlTZ2U6k8nz002bmvUA9t';
    const onToken = token => {
        console.log(token)
        alert('Payment Succesful');
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='CraftStore'
            billingAddress
            shippingAddress
            image=''
            description={`Your total is is ${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />

    )
}

export default StripeCheckoutButton