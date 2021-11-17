import React, { Component } from "react";
import Counter from "./Counter";
import headerImage from "../assets/home/illustration-charts.svg";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="flex1 alignItems padding marginTop">
          <div className="frame1">
            <h1>A simple solution to complex tasks is coming soon</h1>
            <p className="body1">
              Say goodbye to inefficient juggling of multiple apps, teams, and
              projects. Officelite is the new collaboration platform built with
              an intuitive interface to improve productivity.
            </p>
            <button className="button1 boxShadow">
              <Link to="singup" className="body2">
                <p>Get Started</p>
              </Link>
            </button>
          </div>
          <div className="frame2">
            <img className="" src={headerImage} alt="" width="100%" />
          </div>
        </div>

        <main className="flex2 center spaceEvenly ">
          <div className="card">
            <div className="container">
              <div>
                <h2>Basic</h2>
                <h1 className="center">Free</h1>
                <p className="body2">Up to 5 users for free</p>
              </div>
              <div>
                <p className="body2">Basic document collaboration</p>
                <p className="body2">2 gb storage</p>
                <p className="body2">Great security and support</p>
              </div>
            </div>
            <button className="button2">
              <Link to="singup" className="body2 p-button2">
                <p>Try for Free</p>
              </Link>
            </button>
          </div>

          <div className="card bg-blue">
            <div className="container">
              <div>
                <h2>Pro</h2>
                <h1 className="center">$9.99</h1>
                <p className="body2">Per user, billed monthly</p>
              </div>
              <div>
                <p className="body2">All essential integrations</p>
                <p className="body2">50 gb storage</p>
                <p className="body2">More control and insights</p>
              </div>{" "}
            </div>
            <button>
              <Link to="singup" className="body2">
                <p>Try for Free</p>
              </Link>
            </button>
          </div>

          <div className="card">
            <div className="container">
              <div>
                <h2>Ultimate</h2>
                <h1 className="center">$19.99</h1>
                <p className="body2">Per user,billed monthly</p>
              </div>
              <div>
                <p className="body2">Robust work management</p>
                <p className="body2">100 gb storage</p>
                <p className="body2">VIP support</p>
              </div>{" "}
            </div>
            <button className="button2">
              <Link to="singup" className="body2">
                <p>Try for Free</p>
              </Link>
            </button>
          </div>
        </main>

        <footer>
          <div className="counter flex3 alignItems">
            <Counter isSignedUp={false} />
            <button className="button1 footer-btn">
              <Link to="singup" className="body2 ">
                <p>Get Started</p>
              </Link>
            </button>
          </div>
        </footer>
      </div>
    );
  }
}
