import React, { Component } from "react";
import LoginPageLayout from "./LoginLayout";
import { Link } from "react-router-dom";

class Register extends Component {
  render() {
    return (
      <LoginPageLayout>
        <div class="row">
          <form class="col s12">
            <div class="row">
              <div class="input-field col s12">
                <h3>Register Now!</h3>
              </div>
              <div class="input-field col s6">
                <input id="last_name" type="text" class="validate" />
                <label for="last_name">First Name</label>
              </div>
              <div class="input-field col s6">
                <input id="last_name" type="text" class="validate" />
                <label for="last_name">Last Name</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <input id="password" type="password" class="validate" />
                <label for="password">Password</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <input id="email" type="email" class="validate" />
                <label for="email">Email</label>
              </div>
              <div
                className="input-field col s12"
                style={{ textAlign: "center" }}
              >
                Already Registered ? &nbsp;
                <Link waves="light" node="a" to="/login">
                  Login Now
                </Link>
              </div>
            </div>
          </form>
        </div>
      </LoginPageLayout>
    );
  }
}

export default Register;
