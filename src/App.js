import React from "react";

import "./App.css";
import TitleList from "./title-list/title-list";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      starWars: []
    };
  }

  componentDidMount() {
    fetch("https://star-wars-api.herokuapp.com/films")
      .then(response => response.json())
      .then(data => this.setState({ starWars: data }))
      .catch(err => console.log("Error"));
  }

  render() {
    const { starWars } = this.state;

    return <TitleList starWars={starWars} />;
  }
}

export default App;
