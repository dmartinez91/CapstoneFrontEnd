import React, { useState } from "react";
import { Button } from "react-bootstrap";
import currentUser from "../App";
import UserPortfolio from "./UserPorfolio";
import UpdatePortfolio from "./UpdatePortfolio";

const Profile = () => {
  const user = currentUser();
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);
  const [moneyWon, setMoneyWon] = useState(0);
  const [moneyLost, setMoneyLost] = useState(0);
  let winningPercentage = parseFloat(wins / (losses + wins)).toFixed(3);
  let grossWinnings = moneyWon - moneyLost;

  return (
    <div className="container">
      <UserPortfolio displayUserPortfolio={UserPortfolio} />
      <header className="jumbotron">
        <h3>
          <strong>{user.username}</strong> Profile
        </h3>
      </header>
      <p>
        <strong>Id:</strong> {currentUser.id}
      </p>
      <p>
        <strong>Email:</strong> {currentUser.email}
      </p>
      <p>
        <strong>Total Winnings ${grossWinnings} </strong>
      </p>
      <p>
        <strong>
          Betting Record: {wins} - {losses} Percentage: {winningPercentage} %
        </strong>
      </p>
      <React.Fragment>
        <div>
          <Button
            onClick={() => {
              setWins((c) => c + 1);
            }}
          >
            {" "}
            +
          </Button>
          Wins: {wins}
          <Button
            onClick={() => {
              setLosses((c) => c + 1);
            }}
          >
            +
          </Button>
          Losses: {losses}
        </div>
        <label>
          Money Won:
          <input
            type="text"
            value={moneyWon}
            onChange={(event) => setMoneyWon(event.target.value)}
          />
        </label>
        <label>
          Money Lost:
          <input
            type="text"
            value={moneyLost}
            onChange={(event) => setMoneyLost(event.target.value)}
          />
        </label>
      </React.Fragment>
      <br></br>
      <UpdatePortfolio update={UpdatePortfolio} />
    </div>
  );
};

export default Profile;
