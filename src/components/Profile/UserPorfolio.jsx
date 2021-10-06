import { ListGroup, ListGroupItem } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import SportsBookAPI from "../../api/sportsbook";

const UserPortfolio = () => {
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    SportsBookAPI.getUserPortfolio
      .get()
      .then((portfolioData) => setPortfolio(portfolioData));
  }, []);

  return (
    <div>
      <ListGroup>
        {portfolio.map((portfolioProperties, index) => {
          return (
            <div key={index}>
              {console.log(portfolioProperties.user_id)}
              <ListGroupItem>
                User ID: {portfolioProperties.user_id} <br></br>
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
            </div>
          );
        })}
      </ListGroup>
    </div>
  );
};

export default UserPortfolio;
