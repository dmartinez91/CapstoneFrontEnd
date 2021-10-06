import React, { Component } from "react";
import SportsBookAPI from "../../api/sportsbook";

class CreateBet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      game_id: "",
      risk: "",
      day_placed: "",
      oddspicked: "",
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
    const response = await SportsBookAPI.Bets.create(this.state);
    console.log(response);
    window.location = "/mybets";
  };

  render() {
    const game_id = this.state.game_id;
    const risk = this.state.risk;
    const day_placed = this.state.day_placed;
    const oddspicked = this.state.oddspicked;

    return (
      <div class="RegisterForm">
        <h3>create bet!</h3>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <input
            class="m-2"
            name="game_id"
            type="text"
            placeholder="game id"
            value={game_id}
            onChange={this.handleChange}
          />
          <input
            class="m-2"
            name="risk"
            type="text"
            placeholder="risk $"
            value={risk}
            onChange={this.handleChange}
          />
          <br />
          <input
            class="m-2"
            name="day_placed"
            type="date"
            placeholder="day placed"
            value={day_placed}
            onChange={this.handleChange}
          />
          <input
            class="m-2"
            name="oddspicked"
            type="text"
            placeholder="Slip Odds"
            value={oddspicked}
            onChange={this.handleChange}
          />
          <br />

          <input
            id="newUserButton"
            name="submit"
            type="Submit"
            value="Complete Bet Slip"
            className="btn btn-secondary m-2"
          />
        </form>
      </div>
    );
  }
}

export default CreateBet;
