import React from "react";

import "./App.css";
import TitleList from "./title-list/title-list";
import MovieSummary from "./movie-summary/movie-summary";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      starWars: [],
      movieSummary: ""
    };
  }

  componentDidMount() {
    fetch("https://star-wars-api.herokuapp.com/films")
      .then(response => response.json())
      .then(data => this.setState({ starWars: data }))
      .catch(err => console.log("Error"));
  }

  movieTitleHandler = title => {
    this.setState({ movieSummary: title });
  };

  render() {
    const { starWars, movieSummary } = this.state;

    const movieDetails = starWars.filter(opening => {
      return opening.fields.title.includes(movieSummary);
    });

    return (
      <div>
        <TitleList
          starWars={starWars}
          movieTitleHandler={this.movieTitleHandler}
        />
        <MovieSummary details={movieDetails} />
      </div>
    );
  }
}

export default App;
