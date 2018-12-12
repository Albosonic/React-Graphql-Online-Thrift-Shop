const stripe = require('stripe')('sk_test_Zg3Fwg1adG16w2Vxr7AXMagj');
const request = require('request');
module.exports = {
  handlePayment: (req, res) => {    
    stripe.charges.create({
      amount: 2000,
      currency: "usd",
      source: req.body.token,
      description: "Charge for jenny.rosen@example.com"
    }, 
    (err, charge) => {
      if(err) return console.log(err);      
      res.status(200).send(charge.status);
    });
  }
}