import React, { Component, Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import LoginForm from "./LoginForm";

class LoginModal extends Component {
  state = {
    modal: false
  };

  toggle = () => {
    this.setState(previous => ({
      modal: !previous.modal
    }));
  };

  render() {
    const create = this.props.create;

    var title = "Login";
    var button = <Button onClick={this.toggle}>Login</Button>;
    if (create) {
      title = "Login";

      button = (
        <Button
          color="primary"
          className="float"
          onClick={this.toggle}
          style={{ minWidth: "70px", margin: "20px" }}
        >
          Login
        </Button>
      );
    }

    return (
      <Fragment>
        {button}
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>{title}</ModalHeader>

          <ModalBody>
            <LoginForm
              resetState={this.props.resetState}
              toggle={this.toggle}
              users={this.props.users}
              logged_in = {this.props.logged_in}
            />
          </ModalBody>
        </Modal>
      </Fragment>
    );
  }
}

export default LoginModal;
