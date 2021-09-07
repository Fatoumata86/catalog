import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//Import des composants du router
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Accueil from "./components/Accueil";
import Movie from "./components/Movie";
import Error404 from "./components/Error404";
import movies from "./movies.json";

class App extends React.Component {
  render() {
    console.log(movies);
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Accueil}></Route>
          <Route path="/movie/:id" component={Movie}></Route>
          <Route path="*" component={Error404}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
