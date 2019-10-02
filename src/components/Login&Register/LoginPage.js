import React, { Component } from "react";
import LoginPageLayout from "./LoginLayout";
import UserImage from "../../assets/avatar.svg";
import { Button } from "react-materialize";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

class LoginPage extends Component {
  render() {
    return (
      <LoginPageLayout>
        <div className="row container" style={{ width: "400px" }}>
          <div className="input-field col s12" style={{ textAlign: "center" }}>
            <img src={UserImage} alt="user" style={{ height: 120 }} />
          </div>
          <div className="input-field col s12">
            <i className="material-icons prefix">account_circle</i>
            <input id="icon_prefix" type="text" className="validate" />
            <label for="icon_prefix">Username</label>
          </div>
          <div className="input-field col s12">
            <i className="material-icons prefix">vpn_key</i>
            <input id="icon_telephone" type="tel" className="validate" />
            <label for="icon_telephone">Password</label>
          </div>
          <div className="input-field col s12" style={{ textAlign: "center" }}>
            <Button
              waves="light"
              style={{
                width: "80%",
                background: "#6abf8f",
                borderRadius: 30
              }}
            >
              Login
            </Button>
          </div>
          <div className="input-field col s12" style={{ textAlign: "center" }}>
            Not a user ? &nbsp;
            <Link waves="light" node="a" to="/register">
              Register Here
            </Link>
          </div>
        </div>
      </LoginPageLayout>
    );
  }
}

export default LoginPage;
