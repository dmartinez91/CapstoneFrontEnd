import Axios from "axios";

const sportbookAPIDATA = Axios.create({
  baseURL:
    "https://api.the-odds-api.com/v4/sports/americanfootball_nfl/odds/?regions=us&oddsFormat=american&apiKey=0a73f66454ac71637bf496a86389eb9f",
  timeout: 5000,
});

const axios = Axios.create({
  baseURL: "http://127.0.0.1:8000/api",
  timeout: 1000,
});

const getUserToken = () => {
  const jwt = localStorage.getItem("token");
  if (!jwt) throw new Error("User Token Not Found");
  return "Bearer " + jwt;
};

const GamesAPI = {
  get: async () => {
    let response = await sportbookAPIDATA.get();
    return response.data;
  },
};

const Games = {
  get: async () => {
    let response = await axios.get("/games/all/");
    return response.data;
  },
  create: async (gameData) => {
    const jwtToken = getUserToken();
    try {
      let response = await axios.post("/games/", gameData, {
        headers: { Authorization: jwtToken },
      });
      return response.data;
    } catch (error) {
      console.log("Oh no something went wrong!", error.response);
      throw error;
    }
  },
};

const Bets = {
  get: async () => {
    let response = await axios.get("/bets/all/");
    return response.data;
  },
  create: async (betData) => {
    const jwtToken = getUserToken();
    try {
      let response = await axios.post("/bets/", betData, {
        headers: { Authorization: jwtToken },
      });
      return response.data;
    } catch (error) {
      console.log("Oh no something went wrong!", error.response);
      throw error;
    }
  },
};

const SportsBookModule = { Bets, Games, GamesAPI };

export default SportsBookModule;
