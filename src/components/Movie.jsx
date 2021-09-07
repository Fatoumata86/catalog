import React from "react";
import { Link } from "react-router-dom";

import movies from "../movies.json";

class Movie extends React.Component {
  render() {
    console.log(movies);
    return (
      <>
        <h1>{this.props.match.params.title}</h1>
        <h1>{this.props.match.params.director}</h1>
        <h1>{this.props.match.params.stars}</h1>
        <h1>{this.props.match.params.image}</h1>
      </>
    );
  }
}
export default Movie;
