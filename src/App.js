import React from "react";

import "./App.css";
import TitleList from "./title-list/title-list";
import MovieSummary from "./movie-summary/movie-summary";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      starWars: [],
      movieTitle: ""
    };
  }

  componentDidMount() {
    fetch("https://star-wars-api.herokuapp.com/films")
      .then(response => response.json())
      .then(data => this.setState({ starWars: data }))
      .catch(err => console.log("Error"));
  }

  movieTitleHandler = title => {
    this.setState({ movieTitle: title });
  };

  render() {
    const { starWars, movieTitle } = this.state;

    const movieDetails = starWars.filter(opening => {
      return opening.fields.title.includes(movieTitle);
    });

    console.log(movieDetails);

    return (
      <div className="main-app">
        <TitleList
          starWars={starWars}
          movieTitleHandler={this.movieTitleHandler}
        />
        {!movieTitle ? (
          <MovieSummary noDetails />
        ) : (
          <MovieSummary details={movieDetails} />
        )}
      </div>
    );
  }
}

export default App;
