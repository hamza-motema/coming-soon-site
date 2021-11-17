import React, { Component } from "react";
import logo from "../assets/shared/logo.svg";
export default class Header extends Component {
  render() {
    return (
      <div className="padding">
        <img className="logo" src={logo} alt="logo" />
      </div>
    );
  }
}
