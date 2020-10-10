import React, { Component } from "react";
import firebase from '../index.js';

var provider = new firebase.auth.GoogleAuthProvider();

export default class GoogleLogin extends Component {
  login = () => {
    //Hnadle google login
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        //Success
        console.log("User", result.user);
      })
      .catch(function (error) {
        // Handle Errors here.
        alert(error.message);
      });
  };
  
  render() {
    return (
      <div>
        <button onClick={this.login}>Google</button>
      </div>
    );
  }
}
