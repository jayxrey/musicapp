import React, { Component, Fragment, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import AuthService from "./Authentication"

class LogOut extends Component {


    logout = e => {
        AuthService.logout();
        this.props.resetState();
        console.log(localStorage.getItem("user"));
        window.location.reload(false);

      };

  render() {

    return (
        <Button
        type = "button"
          color="primary"
          
          onClick= {this.logout}
          style={{ minWidth: "70px", margin: "20px" }}
        >
          Log Out
        </Button>
    );
  }
}

export default LogOut;