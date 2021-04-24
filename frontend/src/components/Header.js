import React, { Component } from "react";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";

class Header extends Component {
  render() {
    return (
      <div className="text-center">
        <h1> Music App </h1>
        <p> please register and login to view data </p>
          <LoginModal create={true} resetState={this.resetState} />
          <RegisterModal create={true} resetState={this.resetState} />
      </div>

    );
  }
}

export default Header;
