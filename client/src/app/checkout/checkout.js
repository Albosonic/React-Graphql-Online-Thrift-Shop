import './checkout.scss';
import React from 'react';
import { injectStripe } from 'react-stripe-elements';
import { CardElement } from 'react-stripe-elements';
import { postStripePayment } from '../services/stripe-service';

class CheckoutForm extends React.Component {
  constructor(props) {
      super(props);
      this.state = {}
      this.handleNameChange = this.handleNameChange.bind(this)
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.stripe.createToken({ name: this.state.name }).then(({token}) => {
      postStripePayment(token.id);
    });
  };

  handleNameChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className="stripe-form-container">
        <form onSubmit={ this.handleSubmit } className="stripe-form">
          <label className="name-container">
            Firstname
            <input type="text" name="firstname" onChange={ this.handleNameChange }/>
          </label>
          <label className="name-container">
            Lastname
            <input type="text" name="lastname" onChange={ this.handleNameChange }/>
          </label>          
            <CardElement style={{base: {fontSize: '18px'}}} />          
          <button className="cta" type="submit">Confirm order</button>
        </form>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);