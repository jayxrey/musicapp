import React, { Component, Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import NewSongForm from "./NewSongForm";

class NewSongModal extends Component {
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

    var title = "Editing Song";
    var button = <Button onClick={this.toggle}>Edit</Button>;
    if (create) {
      title = "Adding New Song";

      button = (
        <Button
          color="primary"
          className="float-right"
          onClick={this.toggle}
          style={{ minWidth: "200px" }}
        >
          Create New
        </Button>
      );
    }

    return (
      <Fragment>
        {button}
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>{title}</ModalHeader>

          <ModalBody>
            <NewSongForm
              resetState={this.props.resetState}
              toggle={this.toggle}
              songs={this.props.songs}
            />
          </ModalBody>
        </Modal>
      </Fragment>
    );
  }
}

export default NewSongModal;
