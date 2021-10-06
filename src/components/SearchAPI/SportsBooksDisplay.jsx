import React, { useEffect, useState } from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import SearchBar from "./SearchForm";
import CreateGame from "../Games/CreateGame";
import SportsBookAPI from "../../api/sportsbook";

const GetAPI = () => {
  const [apiResults, setAPIResults] = useState([]);

  useEffect(() => {
    SportsBookAPI.sportbookAPIDATA
      .get()
      .then((response) => {
        console.log(response);
        setAPIResults(response.data);
      })
      .catch();
  }, []);

  return (
    <div>
      <SearchBar searchSportsBooks={SearchBar} />

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
                              Team: {teamOdds.name} <br></br> Head to Head Odds:{" "}
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
            <CreateGame makeGame={CreateGame} />
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
};

export default GetAPI;
