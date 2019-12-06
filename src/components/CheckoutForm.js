import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';


class CheckoutForm extends Component {



  constructor(props) {

    super(props);
    this.submit = this.submit.bind(this);
  }

  async submit(ev) {
    // User clicked submit
    let {token} = await this.props.stripe.createToken({name: "Name"});

    //  fetch("https://backonlinecours.herokuapp.com/chargess/" + token.id + "/" + this.props.emailUser + "/" + 'nom du cours' + "/" + '2500')

    //     .then(res => {
    //     console.log("test RES",res)
    //     return res.json()
    //   }).then(data => {
    //     console.log("test CORS",data)

    //   }).catch(err => {
    //     console.log(err)
    //   })

    fetch("/charge", {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({idtoken: token.id, nomcours:'nomcours', emailclient: this.props.emailUser, prix: '5500'})
    }).then(res => {
        console.log("test RES",res)
        return res.json()
      }).then(data => {
        console.log("test CORS",data)

      }).catch(err => {
        console.log(err)
      })
}


  render() {

    return (
      <div className="checkout">
        <p>Would you like to complete the purchase?</p>
        <CardElement />
        <button className='checkout-btn' onClick={this.submit}>Purchase</button>
      </div>
    );
  }
}


export default injectStripe(CheckoutForm);