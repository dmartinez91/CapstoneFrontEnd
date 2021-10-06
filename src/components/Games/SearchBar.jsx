import React, { useEffect, useState } from "react";
import SportsBookAPI from "../../api/sportsbook";
import { ListGroupItem } from "react-bootstrap";

function SearchBar() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  useEffect(() => {
    const gameFilter = (unfilteredGameData) => {
      console.log(`here is my ${unfilteredGameData} games in database`);
      return unfilteredGameData.filter((game) => {
        if (searchTerm.length <= 0) {
          return false;
        }

        const isMatch =
          game.home_Team.toLowerCase().includes(searchTerm) ||
          game.away_Team.toLowerCase().includes(searchTerm);

        if (isMatch) {
          return true;
        } else {
          return false;
        }
      });
    };
    SportsBookAPI.Games.get()
      .then(gameFilter)
      .then((gameData) => setSearchResults(gameData));
  }, [searchTerm]);

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
      <ul>
        {searchResults.map((game) => {
          return (
            <ListGroupItem>
              home team: {game.home_Team} spread: {game.home_Team_Spread} Money
              Line: {game.home_Team_ML}
              <br></br>
              away team: {game.away_Team} spread: {game.away_Team_Spread} Money
              Line: {game.away_Team_ML}
              <br></br>
              over/under: {game.over_under} <br></br>
              Game Day: {game.gameDay} <br></br>
              Sports book: {game.sports_Book} <br></br>
            </ListGroupItem>
          );
        })}
      </ul>
    </div>
  );
}

export default SearchBar;
