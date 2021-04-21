import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { API_URL } from "../constants";

class NewSongForm extends React.Component {
  state = {
    pk: 0,
    song: "",
    artist: "",
    album: "",
    genre: "",
    year: 0
  };

  componentDidMount() {
    if (this.props.songs) {
      const { pk, song, artist, album, genre } = this.props.songs;
      this.setState({ pk, song, artist, album, genre });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createSongs = e => {
    e.preventDefault();
    axios.post(API_URL, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  editSongs = e => {
    e.preventDefault();
    axios.put(API_URL + this.state.pk, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };

  render() {
    return (
      <Form onSubmit={this.props.songs ? this.editSongs : this.createSongs}>
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
          <Label for="artist">Artist</Label>
          <Input
            type="text"
            name="artist"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.artist)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="album">Album</Label>
            <Input
              type="text"
              name="album"
              onChange={this.onChange}
              value={this.defaultIfEmpty(this.state.album)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="genre">Genre</Label>
            <Input
              type="text"
              name="genre"
              onChange={this.onChange}
              value={this.defaultIfEmpty(this.state.genre)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="year">Year</Label>
            <Input
              type="text"
              name="year"
              onChange={this.onChange}
              value={this.defaultIfEmpty(this.state.year)}
          />
        </FormGroup>
        <Button>Send</Button>
      </Form>
    );
  }
}

export default NewSongForm;
