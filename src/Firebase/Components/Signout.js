import React, { Component } from "react";
import firebase from '../index';

export default class Signout extends Component {
  signout = () => {
    //Handle signout
    firebase
      .auth()
      .signOut()
      .then(function () {
        // Sign-out successful.
      })
      .catch(function (error) {
        // An error happened.
        alert(error.message);
      });
  };
  render() {
    return (
      <div>
        <button onClick={this.signout}>Signout</button>
      </div>
    );
  }
}
