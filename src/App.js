import React from "react";

import "./App.css";
import TitleList from "./title-list/title-list";
import MovieSummary from "./movie-summary/movie-summary";
import Search from "./search/search";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      starWars: [],
      movieTitle: "",
      movieSearch: ""
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

  movieSearchHandler = value => {
    this.setState({ movieSearch: value });
  };

  render() {
    const { starWars, movieTitle, movieSearch } = this.state;

    const movieDetails = starWars.filter(opening => {
      return opening.fields.title.includes(movieTitle);
    });

    const filteredTitle = starWars.filter(movie => {
      return movie.fields.title
        .toLowerCase()
        .includes(movieSearch.toLowerCase());
    });

    return (
      <div>
        <Search movieSearchHandler={this.movieSearchHandler} />
        <div className="main-app">
          <TitleList
            movieTitleHandler={this.movieTitleHandler}
            filteredTitle={filteredTitle}
          />
          {!movieTitle ? (
            <MovieSummary noDetails />
          ) : (
            <MovieSummary details={movieDetails} />
          )}
        </div>
      </div>
    );
  }
}

export default App;
