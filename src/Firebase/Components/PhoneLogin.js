import React, { Component } from "react";
import firebase from '../index.js';

export default class PhoneLogin extends Component {
  componentDidMount () {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier("recaptcha-container",
    {
       size:"invisible"
        // other options
    });
}

onClick() {
    const phoneNumber = "********";
    const appVerifier = window.recaptchaVerifier;
    firebase
    .auth()
    .signInWithPhoneNumber(phoneNumber, appVerifier)
    .then(confirmResult => {
      // success
      console.log(confirmResult);
    })
    .catch(error => {
      // error
    });
}
 

  render() {
    return (
      <div>
       <input id="recaptcha-container" type="button" onClick={this.onClick} value="Phone Login"/>
      </div>
    );
  }
};
