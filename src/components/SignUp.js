import React, { Component } from "react";
import Counter from "./Counter";
import { Link } from "react-router-dom";
import iconimage from "../assets/sign-up/icon-arrow-down.svg";
export default class SignUp extends Component {
  render() {
    return (
      <div className="padding">
        <div className="singup-bg"></div>
        <div className="flex2 singup-container">
          <div className="frame3">
            <h1 className="singup-h1">Work smarter. Save time.</h1>
            <p className="body1">
              Easily manage your projects. Get on the list and receive in-app
              perks available only to early subscribers. We are moving into
              final development and getting ready for official launch soon.
            </p>
            <Counter isSignedUp={true} />
          </div>

          <div className=" card2 flexCenter">
            <form action="/" className="flex column">
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Email Address" />
              <div className="select">
                <select className="slct">
                  <img src={iconimage} alt="placeholder" />
                  <option>Basic Pack Free</option>
                  <option>Pro Pack $9.99</option>
                  <option>Ultimate Pack $19.99</option>
                </select>
              </div>
              <input type="text" placeholder="Phone Number" />
              <input type="text" placeholder="Company" />
              <button className="button1 singup-btn">
                <Link to="/" className="body2">
                  <p>Get on the list</p>
                </Link>
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
