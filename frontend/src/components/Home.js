import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import SongList from "./SongList";
import NewSongModal from "./NewSongModal";
import LoginModal from "./LoginModal"
import RegisterModal from "./RegisterModal"
import RatingsList from "./RatingsList";
import RatingsModal from "./RatingsModal";
import authHeader from './Auth-Header';
import LogOut from "./LogoutButton"

import axios from "axios";

import { API_URL } from "../constants";
import LoginForm from "./LoginForm";
var song_url = "http://localhost:8000/api/ratings/"

class Home extends Component {
  state = {
    songs: [],
    ratings: [],
    logged_in: false
  };

  componentDidMount() {
    this.resetState();
    
  }


  changeText = () => {
    this.setState({
      logged_in: localStorage.getItem('user') ? true : false
    }) 
  }

  getSongs = () => {
    axios.get(API_URL, { headers: authHeader() } )
    .then(res => this.setState({ songs: res.data}))
    .catch(() => {
      this.setState ({
        logged_in: false
      })
    })
  };

  getRatings = () => {
    axios.get(song_url, { headers: authHeader() }).then(res => this.setState({ ratings: res.data }));
  };

  resetState = () => {
    this.getSongs();
    this.getRatings();
    this.changeText();

  };

  render() {
    return (
      <Container style={{ marginTop: "20px" }}>
        <div className="text-center">
        <h1> Music App </h1>
        <p>{this.state.logged_in ? 'you are logged in!' : 'please register and login to view data'}</p>
      </div>
        <div className="text-center">
          <LoginModal create={true} resetState={this.resetState} logged_in = {this.state.logged_in}/>
          <RegisterModal create={true} resetState={this.resetState} logged_in = {this.state.logged_in}/>
          <LogOut resetState={this.resetState}/>
      </div>
        <Row>
          <Col>
            <SongList
              songs={this.state.songs}
              ratings={this.state.ratings}
              resetState={this.resetState}
              logged_in = {this.state.logged_in}
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
