import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { API_URL } from "../constants";

var rating_url = "http://localhost:8000/api/ratings/"

class AddRating extends React.Component {
  state = {
    id: 0,
    rating: 0,
    pk: 0

  };

  componentDidMount() {
    if (this.props.songs) {
        const { pk } = this.props.songs;
        this.setState({ pk });
      }
    if (this.props.ratings) {
      const { id, rating } = this.props.ratings;
      this.setState({ id, rating });
    }
    console.log(this.props.songs)
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createRating = e => {
    this.state.song_id = this.state.pk
    console.log(this.state)
    
    e.preventDefault();
    axios.put(rating_url, {
        id: this.state.id,
        song: this.state.pk,
        rating: this.state.rating
    }).then((res) => {
        console.log(res);
        console.log(res.data);
      this.props.resetState();
      this.props.toggle();
    });
  };

  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };

  render() {

    

    return (
      <Form onSubmit={this.createRating}>
        <FormGroup>
          <Label for="rating">Rating</Label>
          <Input
            type="number"
            name="rating"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.rating)}
          />
        </FormGroup>
        <Button>Send</Button>
      </Form>
    );
  }
}

export default AddRating;
