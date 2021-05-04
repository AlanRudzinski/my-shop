import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

import CustomButton from '../custom-button/custom-button.component';


const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_6HGRa2tY049q7MlTZ2U6k8nz002bmvUA9t';
    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(response => {
            alert('Payment successful')
            // console.log(response)
        }).catch(error => {
            // console.log('Payment error: ', JSON.parse(error))
            alert('There was an issue with your payment')
        })
    }
    return (<StripeCheckout
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
        >
            <CustomButton>Pay Now </CustomButton>
        </StripeCheckout>
    )
}

export default StripeCheckoutButton