import axios from "axios";
import React, { useEffect, useState } from "react";
import Userbets from "./Userbets";
import CreateBet from "./CreateBet";

const ShowUserbets = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [newBet, setNewBet] = useState([]);

  useEffect(() => {
    makeGetRequest();
    createBetSlip();
  }, []);

  const makeGetRequest = async () => {
    try {
      let response = await axios.get("http://127.0.0.1:8000/api/bets/all/");
      console.log(response);
      if (response.data) {
        setSearchResults(response.data);
      }
    } catch (ex) {
      console.log(ex);
    }
  };

  const createBetSlip = async () => {
    try {
      let response = await axios.post("http://127.0.0.1:8000/api/bets/");
      if (response.data) {
        setNewBet(response.data);
      }
    } catch (ex) {
      console.log(ex);
    }
  };

  return (
    <div>
      <Userbets displaySearch={searchResults} />
      <CreateBet makeBet={createBetSlip} />
    </div>
  );
};

export default ShowUserbets;
