import React from "react";
import { Button, Form, FormGroup, Input, Label, Table } from "reactstrap";

import axios from "axios";

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

    id: "",
    song_id: "",
    rating: ""
  };

  componentDidMount() {
    if (this.props.songs) {
      const { pk, song, artist, album, genre, year } = this.props.songs;
      this.setState({ pk, song, artist, album, genre, year });
    }
    if (this.props.ratings) {
      const {id, song_id, rating} = this.props.ratings;
      this.setState({id, song_id, rating });
    }
  }


  render() {

    const filteredRatings = this.props.ratings.filter(item => item.song_id === this.state.pk);

    return (
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
              <tr key={ratings.song_id}>
                <td>{this.state.song}</td>
                <td>{ratings.rating}</td>
                <td align="center">
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    );
  }
}

export default SongRatingsForm;
