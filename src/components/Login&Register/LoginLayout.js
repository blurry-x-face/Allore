import React, { Component } from "react";
import BG from "../../assets/bg.svg";
import Layout1 from "../Layout";

class LoginPageLayout extends Component {
  render() {
    return (
      <Layout1>
        <div className="container">
          <div className="row">
            <div className="col horizontal-center s6">
              <img
                src={BG}
                alt="Background Illustration"
                style={{ height: 506 }}
              />
            </div>
            <div className="horizontal-center col s6 row">
              <form
                className="col s12"
                style={{ display: "flex", justifyContent: "center" }}
              >
                {this.props.children}
              </form>
            </div>
          </div>
        </div>
      </Layout1>
    );
  }
}

export default LoginPageLayout;
