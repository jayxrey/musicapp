import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import SongList from "./SongList";
import NewSongModal from "./NewSongModal";

import axios from "axios";

import { API_URL } from "../constants";

class Home extends Component {
  state = {
    songs: []
  };

  componentDidMount() {
    this.resetState();
  }

  getSongs = () => {
    axios.get(API_URL).then(res => this.setState({ songs: res.data }));
  };

  resetState = () => {
    this.getSongs();
  };

  render() {
    return (
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col>
            <SongList
              songs={this.state.songs}
              resetState={this.resetState}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <NewSongModal create={true} resetState={this.resetState} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
