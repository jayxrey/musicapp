import React, { Component, Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import RegisterForm from "./RegisterForm";

class RegisterModal extends Component {
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

    var title = "Register";
    var button = <Button onClick={this.toggle}>Register</Button>;
    if (create) {
      title = "Register";

      button = (
        <Button
          color="primary"
          className="float"
          onClick={this.toggle}
          style={{ minWidth: "70px" }}
        >
          Register
        </Button>
      );
    }

    return (
      <Fragment>
        {button}
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>{title}</ModalHeader>

          <ModalBody>
            <RegisterForm
              resetState={this.props.resetState}
              toggle={this.toggle}
            />
          </ModalBody>
        </Modal>
      </Fragment>
    );
  }
}

export default RegisterModal;
