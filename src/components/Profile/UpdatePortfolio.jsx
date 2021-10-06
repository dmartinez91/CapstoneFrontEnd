import React, { Component } from "react";
import SportsBookAPI from "../../api/sportsbook";

class UpdatePortfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      betsWon: "",
      betLost: "",
      moneyWon: "",
      moneyLost: "",
      netGain: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]:
        event.target.type === "number"
          ? event.target.valueAsNumber
          : event.target.value,
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const response = await SportsBookAPI.getUserPortfolio.update(this.state);
    console.log(response);
    window.location = "/profile";
  };

  render() {
    const betsWon = this.state.betsWon;
    const betLost = this.state.betLost;
    const moneyWon = this.state.moneyWon;
    const moneyLost = this.state.moneyLost;
    const netGain = this.state.netGain;

    return (
      <div class="RegisterForm">
        <h3>Update Your Portfolio in the fields proiveded </h3>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <strong>
            <input
              class="m-2"
              name="betsWon"
              type="text"
              placeholder="Bets Won"
              value={betsWon}
              onChange={this.handleChange}
            />
            <input
              class="m-2"
              name="betLost"
              type="text"
              placeholder="Bets Lost"
              value={betLost}
              onChange={this.handleChange}
            />
            <br />
            <input
              class="m-2"
              name="moneyWon"
              type="text"
              placeholder="Money Won"
              value={moneyWon}
              onChange={this.handleChange}
            />
            <input
              class="m-2"
              name="moneyLost"
              type="text"
              placeholder="Money Lost"
              value={moneyLost}
              onChange={this.handleChange}
            />
            <br />
            <input
              class="m-2"
              name="netGain"
              type="text"
              placeholder="Net Gain"
              value={netGain}
              onChange={this.handleChange}
            />
            <br />

            <input
              id="newUserButton"
              name="submit"
              type="Submit"
              value="Update Portfolio"
              className="btn btn-secondary m-2"
            />
          </strong>
        </form>
      </div>
    );
  }
}

export default UpdatePortfolio;
