import React, { Component } from "react";
import CardList from "./components/CardList";

class App extends Component {
  render() {
    return (
      <div className="tc">
        <h1>How Well Do You Remember Faces</h1>
        <CardList />
      </div>
    );
  }
}

export default App;
