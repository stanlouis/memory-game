import React, { Component } from "react";
import Card from "./Card";
import { robots } from "../robots";

class CardList extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      score: 0
    };
  }

  shuffle = arra1 => {
    let ctr = arra1.length;
    let temp;
    let index;

    // While there are elements in the array
    while (ctr > 0) {
      // Pick a random index
      index = Math.floor(Math.random() * ctr);
      // Decrease ctr by 1
      ctr--;
      // And swap the last element with it
      temp = arra1[ctr];
      arra1[ctr] = arra1[index];
      arra1[index] = temp;
    }
    return arra1;
  };

  roboClicked = id => {
    console.log("Clicked", id);
    this.setState({
      robots: this.shuffle(robots),
      score: this.state.score + 1
    });
  };


  render() {
    return (
      <div>
        <h1>The score is: {this.state.score}</h1>
        {this.state.robots.map(robot => (
          <Card
            roboClicked={this.roboClicked}
            key={robot.id}
            id={robot.id}
            name={robot.name}
          />
        ))}
      </div>
    );
  }
}

export default CardList;
