import { ListGroup, ListGroupItem } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import SportsBookAPI from "../../api/sportsbook";

const UserPortfolio = () => {
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    SportsBookAPI.getUserPortFolio
      .get()
      .then((portfolioData) => setPortfolio(portfolioData));
  }, []);

  return (
    <div>
      <ListGroup>
        {portfolio.map((portfolioProperties) => {
          return (
            <ListGroupItem>
              Portfolio ID: {portfolioProperties.id} <br></br>
              Total wins: {portfolioProperties.betsWon}
              <br></br>
              Total losses: {portfolioProperties.betLost}
              <br></br>
              Money Won: ${portfolioProperties.moneyWon}
              <br></br>
              Money Lost: ${portfolioProperties.moneyLost}
              <br></br>
              Net Gain: ${portfolioProperties.netGain}
              <br></br>
            </ListGroupItem>
          );
        })}
      </ListGroup>
    </div>
  );
};

export default UserPortfolio;
