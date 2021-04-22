import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import SongList from "./SongList";
import NewSongModal from "./NewSongModal";
import RatingsList from "./RatingsList";
import RatingsModal from "./RatingsModal";

import axios from "axios";

import { API_URL } from "../constants";
var song_url = "http://localhost:8000/api/ratings/"

class Home extends Component {
  state = {
    songs: [],
    ratings: []
  };

  componentDidMount() {
    this.resetState();
  }

  getSongs = () => {
    axios.get(API_URL).then(res => this.setState({ songs: res.data }));
  };

  getRatings = () => {
    axios.get(song_url).then(res => this.setState({ ratings: res.data }));
  };

  resetState = () => {
    this.getSongs();
    this.getRatings();
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
        <Row>
          <Col>
            <RatingsList
              ratings={this.state.ratings}
              resetState={this.resetState}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
