import { ListGroup, ListGroupItem } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Leaderboard = () => {
  const [portfolios, setPortfolios] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/portfolio/all/")
      .then((response) => {
        console.log(response);
        setPortfolios(response.data);
      })
      .catch();
  }, []);

  const sortByWinnings = () => {
    const sorted = portfolios.sort((a, b) => {
      return b.moneyWon - a.moneyWon;
    });
    setPortfolios(sorted);
  };

  const sortByWinPercentage = () => {
    const sorted = portfolios.sort((a, b) => {
      return (
        b.betsWon / (b.betswon + b.betLost) -
        a.betsWon / (a.betsWon + a.betLost)
      );
    });
    setPortfolios(sorted);
  };

  return (
    <div>
      <ListGroup>
        {portfolios.map((portfolio) => (
          <ListGroupItem key={portfolio.id}>
            Portfolio ID: {portfolio.id} <br></br>
            Total wins: {portfolio.betsWon}
            <br></br>
            Total losses: {portfolio.betLost}
            <br></br>
            Money Won: ${portfolio.moneyWon}
            <br></br>
            Money Lost: ${portfolio.moneyLost}
            <br></br>
            Net Gain: ${portfolio.netGain}
            <br></br>
          </ListGroupItem>
        ))}
        <button onClick={sortByWinnings}>Sort by Winnings</button>
        <button onClick={sortByWinPercentage}>Sort by Win Percentage</button>
      </ListGroup>
    </div>
  );
};

export default Leaderboard;
