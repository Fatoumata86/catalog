import React from "react";
import { Link } from "react-router-dom";
//Import des composants du router
import movies from "../movies.json";

class Accueil extends React.Component {
  render() {
    console.log(movies);
    return (
      <ul>
        {movies.map((movie) => (
          <li>
            <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    );
  }
}
export default Accueil;
