import React, { Component } from "react";
import { Table } from "reactstrap";
import RatingsModal from "./RatingsModal";

import ConfirmRatingDeleteModal from "./ConfirmRatingDeleteModal";

class RatingsList extends Component {
  render() {
    const ratings = this.props.ratings;
    return (
      <Table dark>
        <thead>
          <tr>
            <th>Username</th>
            <th>Song</th>
            <th>Rating</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {!ratings || ratings.length <= 0 ? (
            <tr>
              <td colSpan="6" align="center">
                <b>No ratings yet</b>
              </td>
            </tr>
          ) : (
            ratings.map(ratings => (
              <tr key={ratings.song}>
                <td>{ratings.username}</td>
                <td>{ratings.rating}</td>
                <td align="center">
                  <RatingsModal
                    create={false}
                    ratings={ratings}
                    resetState={this.props.resetState}
                  />
                  &nbsp;&nbsp;
                  <ConfirmRatingDeleteModal
                    song={ratings.song}
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

export default RatingsList;
