import React, { Component } from "react";
import NavBar from "../Nav";

class Layout1 extends Component {
  render() {
    return (
      <div className="max-height">
        <NavBar />
        {this.props.children}
      </div>
    );
  }
}

export default Layout1;
