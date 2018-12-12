import './account-settings.scss';
import React from 'react';
import { StripeProvider, Elements } from 'react-stripe-elements';

import InjectedCheckoutForm from '../checkout/checkout';

class AccountSettings extends React.Component {
  render () {
    return (
      <StripeProvider apiKey="pk_test_baS4eaKTzJ3xiXpz2yPtRwjO">
        <Elements>
          <InjectedCheckoutForm />
        </Elements>
      </StripeProvider>
    )
  }
}

export default AccountSettings;