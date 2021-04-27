import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import authHeader from "./Auth-Header"
import axios from "axios";

import { API_URL } from "../constants";

var song_url = "http://localhost:8000/api/songs/"

class NewSongForm extends React.Component {
  state = {
    pk: 0,
    song: "",
    artist: "",
    album: "",
    genre: "",
    year: ""
  };

  componentDidMount() {
    if (this.props.songs) {
      const { pk, song, artist, album, genre, year } = this.props.songs;
      this.setState({ pk, song, artist, album, genre, year });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createSongs = e => {
    e.preventDefault();
    axios.post(song_url, this.state, { headers: authHeader() }).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  editSongs = e => {
    e.preventDefault();
    axios.put(song_url + this.state.pk + '/', this.state, { headers: authHeader() }).then(() => {
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
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="artist">Artist</Label>
          <Input
            type="text"
            name="artist"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.artist)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="album">Album</Label>
            <Input
              type="text"
              name="album"
              onChange={this.onChange}
              value={this.defaultIfEmpty(this.state.album)}
              required
          />
        </FormGroup>
        <FormGroup>
          <Label for="genre">Genre</Label>
            <Input
              type="text"
              name="genre"
              onChange={this.onChange}
              value={this.defaultIfEmpty(this.state.genre)}
              required
          />
        </FormGroup>
        <FormGroup>
          <Label for="year">Year</Label>
            <Input
              type="number"
              name="year"
              onChange={this.onChange}
              value={this.defaultIfEmpty(this.state.year)}
              required
          />
        </FormGroup>
        <Button>Send</Button>
      </Form>
    );
  }
}

export default NewSongForm;
