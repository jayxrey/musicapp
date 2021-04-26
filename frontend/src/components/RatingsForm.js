import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import authHeader from "./Auth-Header"

import axios from "axios";

import { API_URL } from "../constants";


class RatingsForm extends React.Component {
  state = {
    username: "",
    song: "",
    rating: ""
  };

  componentDidMount() {
    if (this.props.ratings) {
      const { username, song, rating } = this.props.ratings;
      this.setState({ username, song, rating });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createRatings = e => {
    e.preventDefault();
    axios.post(API_URL, this.state, { headers: authHeader() }).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  editRatings = e => {
    e.preventDefault();
    axios.put(API_URL + this.state.pk, this.state, { headers: authHeader() }).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };

  render() {

    if(!this.props.show){
      return null;
    }
    else {
    return (
      <Form onSubmit={this.props.songs ? this.editRatings : this.createRatings}>
        <FormGroup>
          <Label for="username">Username</Label>
          <Input
            type="text"
            name="username"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.username)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="song">Song</Label>
          <Input
            type="text"
            name="song"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.song)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="rating">Rating</Label>
            <Input
              type="text"
              name="rating"
              onChange={this.onChange}
              value={this.defaultIfEmpty(this.state.rating)}
          />
        </FormGroup>
        <Button>Send</Button>
      </Form>
    );
  }}
}

export default RatingsForm;
