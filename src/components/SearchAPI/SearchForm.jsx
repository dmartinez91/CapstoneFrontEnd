import React, { useEffect, useState } from "react";
import SportsBookAPI from "../../api/sportsbook";
import { ListGroupItem, ListGroup, Button } from "react-bootstrap";

function SearchBar(props) {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    const gameFilter = (unfilteredGameData) => {
      console.log(`here is my ${unfilteredGameData}`);
      return unfilteredGameData.filter((game) => {
        if (searchTerm.length <= 0) {
          return false;
        }

        const isMatch =
          game.home_team.toLowerCase().includes(searchTerm) ||
          game.away_team.toLowerCase().includes(searchTerm);

        if (isMatch) {
          return true;
        } else {
          return false;
        }
      });
    };
    SportsBookAPI.GamesAPI.get()
      .then(gameFilter)
      .then((gameData) => setSearchResults(gameData));
  }, [searchTerm]);

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input name="search" value={searchTerm} onChange={handleChange} />
        <Button type="submit" variant="secondary">
          Search
        </Button>{" "}
      </form>
      <ListGroup>
        {searchResults.map((game) => (
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
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
}

export default SearchBar;
