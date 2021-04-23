import React from "react";
import { Button, Form, FormGroup, Input, Label, Table, Container, Row, Col, Modal, ModalBody, ModalHeader} from "reactstrap";
import AddRating from "./AddRatingModal";

import axios from "axios";
import { Fragment } from "react";

var song_url = "http://localhost:8000/api/songs/"
var rating_url = "http://localhost:8000/api/ratings/"

class SongRatingsForm extends React.Component {
  state = {
    pk: 0,
    song: "",
    artist: "",
    album: "",
    genre: "",
    year: "",

    modal: false
  };

  toggle = () => {
    this.setState(previous => ({
      modal: !previous.modal
    }));
  };

  componentDidMount() {
    if (this.props.songs) {
      const { pk, song, artist, album, genre, year } = this.props.songs;
      this.setState({ pk, song, artist, album, genre, year });
    }
  }


  render() {

    const filteredRatings = this.props.ratings.filter(item => item.song === this.state.pk);

    var button = <Button onClick={this.toggle}>Edit</Button>;

    button = (
      <Button 
        color="primary"
        className="float-right"
        onClick={this.toggle}
        style={{ minWidth: "200px" }}
      >
        Add Rating
      </Button>
    );

    return (
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col>
            <Table dark>
              <thead>
                <tr>
                  <th>Song</th>
                  <th>Rating</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
              {!filteredRatings.length || filteredRatings.rating <= 0 ? (
                  <tr>
                    <td colSpan="6" align="center">
                      <b>No ratings for this song :(</b>
                    </td>
                  </tr>
                ) : (
                  filteredRatings.map(ratings => (
                    <tr key={ratings.song}>
                      <td>{this.state.song}</td>
                      <td>{ratings.rating}</td>
                      <td align="center">
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </Table>
          </Col>
        </Row>
        <Row>
          <Col>
          <Fragment>
              {button}
              <Modal isOpen={this.state.modal} toggle={this.toggle}>
              <ModalHeader toggle={this.toggle}>kek</ModalHeader>
                <ModalBody>
                  <AddRating
                    resetState={this.props.resetState}
                    toggle={this.toggle}
                    ratings={this.props.ratings}
                    songs = {this.props.songs}
                  />
                </ModalBody>
              </Modal>
            </Fragment>
          </Col>
        </Row>
        <Row>
          <Col>
            
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SongRatingsForm;
