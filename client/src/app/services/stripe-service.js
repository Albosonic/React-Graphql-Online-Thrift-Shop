import axios from 'axios';

export const postStripePayment = token => {  
  axios.post('/stripe/payment', { token: token })
  .then(resp => {
    console.log(resp);
  }, err => console.log('ERROR:', err))
}