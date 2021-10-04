import React, {useEffect, useState} from 'react';
import axios from 'axios'
import SearchBets from './SearchBets';
import Userbets from './Userbets';
import { ListGroup, ListGroupItem, Button } from 'react-bootstrap';


const CreateBet = (props) => {
    
    return (
        <ListGroup horizontal id="boxborder">
            <ListGroupItem>
                {console.log(props.displaySearch)}
                {props.displaySearch.map((bet, index) => {
                    return (
                        <div key={index}>
                            {" "}
                        <ListGroupItem>
                    <form  onSubmit={(event) => props.handlesubmit(event)}>
                        <label>Odds</label>
                        <input name="" onChange={this.handleChange} value = {bet.oddspicked}/>
                        <label>Game ID</label>
                        <input name="album" onChange={this.handleChange} value = {bet.game_id}/>
                        <label>Risk</label>
                        <input name="artist" onChange={this.handleChange} value = {bet.risk}/>
                        <label>Day placed</label>
                        <input name="release_date" onChange={this.handleChange} value = {bet.day_placed}/>
                        <button type="submit">Create Song</button>
                    </form>

                        </ListGroupItem>
                        </div>
                    );
                })}
            </ListGroupItem>



        </ListGroup>

        

    );
};


export default CreateBet; 