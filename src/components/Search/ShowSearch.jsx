import React from "react";
import { ListGroup,ListGroupItem, Button } from "react-bootstrap";

const ShowSearch = (props) => {

    return (
        <ListGroup horizontal id="boxborder">
            <ListGroupItem>
                
                {props.displaySearch.map((game, index) => {
                    return (
                        <div key={index}>
                            {" "}
                            Game: {game.home_Team} <br></br>

                        </div>
                    );
                })}
            </ListGroupItem>
        </ListGroup>
    );
};
export default ShowSearch;