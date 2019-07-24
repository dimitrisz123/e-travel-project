import React from "react";

import "./App.css";
import TitleList from "./title-list/title-list";
import MovieSummary from "./movie-summary/movie-summary";
import Search from "./search/search";
import Sorting from "./sorting/sorting";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      starWars: [],
      movieTitle: "",
      movieSearch: "",
      sortMoviesBy: ""
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

  movieSortingHandler = value => {
    this.setState({ sortMoviesBy: value });
  };

  sortMoviesByYear = (a, b) => {
    return a.fields.release_date - b.fields.release_date;
  };

  sortMoviesByEpisode = (a, b) => {
    return a.fields.episode_id - b.fields.episode_id;
  };

  render() {
    const { starWars, movieTitle, movieSearch, sortMoviesBy } = this.state;

    const movieDetails = starWars.filter(opening => {
      return opening.fields.title.includes(movieTitle);
    });

    let filteredTitle = starWars.filter(movie => {
      return movie.fields.title
        .toLowerCase()
        .includes(movieSearch.toLowerCase());
    });

    if (sortMoviesBy === "year") {
      filteredTitle = starWars
        .filter(movie => {
          return movie.fields.title
            .toLowerCase()
            .includes(movieSearch.toLowerCase());
        })
        .sort(this.sortMoviesByYear);
    } else if (sortMoviesBy === "episode") {
      filteredTitle = starWars
        .filter(movie => {
          return movie.fields.title
            .toLowerCase()
            .includes(movieSearch.toLowerCase());
        })
        .sort(this.sortMoviesByEpisode);
    }
    console.log(filteredTitle);

    return (
      <div>
        <Sorting movieSortingHandler={this.movieSortingHandler} />
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
