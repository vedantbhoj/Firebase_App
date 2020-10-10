import "./index.css";
import React, { Component } from "react";
import GoogleLogin from "../Firebase/Components/GoogleLogin.js";
import PhoneLogin from "../Firebase/Components/PhoneLogin.js";
import EmailIdLogin from "../Firebase/Components/EmailIdLogin";

export default class index extends Component {
  render() {
    return (
      <div>
        <EmailIdLogin />
        <GoogleLogin />
        <PhoneLogin />
      </div>
    );
  }
}
