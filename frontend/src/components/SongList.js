import React, { Component } from "react";
import { Table } from "reactstrap";
import NewSongModal from "./NewSongModal";
import RatingsModal from "./SongRatingListModal"


import ConfirmRemovalModal from "./ConfirmRemovalModal";

class SongList extends Component {
  render() {
    const songs = this.props.songs;
    const ratings = this.props.ratings;
    const logged_in = this.props.logged_in;
    return (
      <Table dark>
        <thead>
          <tr>
            <th>Song</th>
            <th>Artist</th>
            <th>Album</th>
            <th>Genre</th>
            <th>Year</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {!songs || songs.length <= 0 ? (
            <tr>
              <td colSpan="6" align="center">
                <b>{logged_in ? "No songs entered" : 'please register and login to view data'}</b>
              </td>
            </tr>
          ) : (
            songs.map(songs => (
              <tr key={songs.pk}>
                <td>{songs.song}</td>
                <td>{songs.artist}</td>
                <td>{songs.album}</td>
                <td>{songs.genre}</td>
                <td>{songs.year}</td>
                <td align="center">
                  <RatingsModal
                    create={false}
                    songs={songs}
                    ratings={ratings}
                    resetState={this.props.resetState}
                  />
                  <NewSongModal
                    create={false}
                    songs={songs}
                    resetState={this.props.resetState}
                  />
                  &nbsp;&nbsp;
                  <ConfirmRemovalModal
                    pk={songs.pk}
                    resetState={this.props.resetState}
                  />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    );
  }
}

export default SongList;
