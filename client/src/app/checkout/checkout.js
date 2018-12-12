import './checkout.scss';
import React from 'react';
import { injectStripe } from 'react-stripe-elements';
import { CardElement } from 'react-stripe-elements';
import { postStripePayment } from '../services/stripe-service';

class CheckoutForm extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        name: ''
      }
      this.handleNameChange = this.handleNameChange.bind(this)
  }
  handleSubmit = (e) => {    
    e.preventDefault();
    this.props.stripe.createToken({ name: this.state.name }).then(({token}) => {
      postStripePayment(token.id);      
    });
  };

  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }

  render() {
    return (
      <div className="stripe-form-container">
        <form onSubmit={ this.handleSubmit } className="stripe-form">
          <label>
            Name
            <input type="text" onChange={ this.handleNameChange }/>
          </label>
          <label>
            Card details
            <CardElement style={{base: {fontSize: '18px'}}} />
          </label>
          <button>Confirm order</button>
        </form>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);