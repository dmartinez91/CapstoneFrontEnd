import axios from "axios";
import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import ShowGames from "./ShowGames";
import CreateGame from "./CreateGame";

const MakeSearch = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [games, setGames] = useState([]);

  useEffect(() => {
    makeGetRequest();
    createGameRequest();
  }, []);

  const makeGetRequest = async () => {
    try {
      let response = await axios.get(`http://127.0.0.1:8000/api/games/all/`);
      //   console.log(response);
      if (response.data) {
        setSearchResults(response.data);
      }
    } catch (ex) {
      console.log(ex);
    }
  };

  const createGameRequest = async () => {
    try {
      let response = await axios.post("http://127.0.0.1:8000/api/games/all/");
      if (response.data) {
        setGames(response.data);
      }
    } catch (ex) {
      console.log(ex);
    }
  };

  return (
    <div>
      <SearchBar makeSearch={makeGetRequest} />
      <ShowGames displaySearch={searchResults} />
      <CreateGame makeGame={createGameRequest} />
    </div>
  );
};

export default MakeSearch;
