import React from "react";
import { ListGroup,ListGroupItem, Button } from "react-bootstrap";

const ShowSearch = (props) => {

    return (
        <ListGroup horizontal id="boxborder">
            <ListGroupItem>
                {console.log(props.displaySearch)}
                {props.displaySearch.map((recipe, index) => {
                    return (
                        <div key={index}>
                            {" "}
                            Game: {recipe} <br></br>

                        </div>
                    );
                })}
            </ListGroupItem>
        </ListGroup>
    );
};
export default ShowSearch;