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

  shuffle = listItems => {
    let ctr = listItems.length;
    let temp;
    let index;

    // While there are elements in the array
    while (ctr > 0) {
      // Pick a random index
      index = Math.floor(Math.random() * ctr);
      // Decrease ctr by 1
      ctr--;
      // And swap the last element with it
      temp = listItems[ctr];
      listItems[ctr] = listItems[index];
      listItems[index] = temp;
    }
    return listItems;
  };

  robotClicked = id => {
    const robots = this.state.robots;
    //set clicked image guessed to true;

    const guessedImgArr = robots.filter(item => item.id === id);
    console.log(guessedImgArr, robots);
    console.log("Clicked", id);
    if (!guessedImgArr[0].guessed) {
      this.setState({
        robots: this.shuffle(robots),
        score: this.state.score + 1
      });
      guessedImgArr[0].guessed = true;
    } else {
      this.setState({
        robots: this.shuffle(robots),
        score: 0
      });
      alert("Your Memory could be improved?");
      //Reset guessed
      robots.forEach(robot => (robot.guessed = false));
    }
  };

  render() {
    return (
      <div>
        <h1>The score is: {this.state.score} of 10</h1>
        {this.state.robots.map(robot => (
          <Card
            roboClicked={this.robotClicked}
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
