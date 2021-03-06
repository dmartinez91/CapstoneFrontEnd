import React from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";

const ShowGames = (props) => {
  return (
    <ListGroup horizontal id="boxborder">
      <ListGroupItem>
        {props.displaySearch.map((game, index) => {
          return (
            <div key={index}>
              {" "}
              <ListGroupItem>
                home team: {game.home_Team} spread: {game.home_Team_Spread}{" "}
                Money Line: {game.home_Team_ML}
                <br></br>
                away team: {game.away_Team} spread: {game.away_Team_Spread}{" "}
                Money Line: {game.away_Team_ML}
                <br></br>
                over/under: {game.over_under} <br></br>
                Game Day: {game.gameDay} <br></br>
                Sports book: {game.sports_Book} <br></br>
                Game ID: {game.id}
              </ListGroupItem>
            </div>
          );
        })}
      </ListGroupItem>
    </ListGroup>
  );
};
export default ShowGames;
