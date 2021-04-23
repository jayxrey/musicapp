import React, { Component, Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import SongRatingsForm from "./SongRatingsForm";


//ratings modal for the button that calls the window to pop up with all the
//ratings
class RatingsModal extends Component {
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

    var divStyle = {
      marginRight: "20px"
    };

    var title = "Song Ratings";
    var button = <Button style={divStyle} onClick={this.toggle}>Ratings</Button>;

    return (
      <Fragment>
        {button}
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>{title}</ModalHeader>

          <ModalBody>
            <SongRatingsForm
              resetState={this.props.resetState}
              toggle={this.toggle}
              songs={this.props.songs}
              ratings={this.props.ratings}
            />
          </ModalBody>
        </Modal>
      </Fragment>
    );
  }
}

export default RatingsModal;
