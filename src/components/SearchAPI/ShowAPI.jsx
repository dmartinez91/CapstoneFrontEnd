import React from 'react';
import { ListGroup,ListGroupItem, Button } from "react-bootstrap";

const ShowAPI = (props) => {
    return (
        <ListGroup horizontal id="boxborder">
            <ListGroupItem>
                {props.dispalySearch.map((game, index) => {
                    return (
                        <div key={index}>
                            {" "}

                        <ListGroupItem>
                            show api stuff: {game}
                        
                        </ListGroupItem>
                        </div>
                    )
                })}

            </ListGroupItem>
        </ListGroup>
    );

}

export default ShowAPI;