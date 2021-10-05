import axios from "axios";
import React, { useEffect, useState } from "react";
import { ListGroup, ListGroupItem, Button } from "react-bootstrap";

const GetAPI = () => {
  const [apiResults, setAPIResults] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.the-odds-api.com/v4/sports/americanfootball_nfl/odds/?regions=us&oddsFormat=american&apiKey=0a73f66454ac71637bf496a86389eb9f"
      )
      .then((response) => {
        console.log(response);
        setAPIResults(response.data);
      })
      .catch();
  }, []);

  return (
    <div>
      <ListGroup>
        {apiResults.map((game) => (
          <ListGroupItem key={game.id}>
            {game.sport_title} Kickoff{" "}
            {new Date(game.commence_time).toLocaleString()} Home team{" "}
            {game.home_team} Away Team {game.away_team}
            {game.bookmakers.map((bookmaker) => {
              return (
                <ListGroupItem>
                  Book Maker: {bookmaker.title}{" "}
                  {bookmaker.markets.map((odds) => {
                    return (
                      <div>
                        {" "}
                        {odds.outcomes.map((teamOdds) => {
                          return (
                            <div>
                              Team: {teamOdds.name} <br></br> odds:{" "}
                              {teamOdds.price}
                            </div>
                          );
                        })}{" "}
                      </div>
                    );
                  })}
                </ListGroupItem>
              );
            })}
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
};

export default GetAPI;
