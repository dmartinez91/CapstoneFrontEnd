import axios from "axios";
import React, {Component} from 'react';


class CreateBet extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            game_id: '',
            risk: '',
            day_placed: '',
            oddspicked: '',
         }
    }

    async registerRequest(betSlipInfo){
        betSlipInfo = {
            game_id: betSlipInfo.game_id,
            risk: betSlipInfo.risk,
            day_placed: betSlipInfo.day_placed,
            oddspicked: betSlipInfo.oddspicked,
            
        }
        console.log(betSlipInfo)
        try{
            let response = await axios.post('http://127.0.0.1:8000/api/bets/', betSlipInfo);
            console.log(response.data);
            window.location = '/games';
        }
        catch(ex){
            console.log("bad call")
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.type === "number"? event.target.valueAsNumber : event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.registerRequest(this.state);
    };

    render() {
        const game_id = this.state.game_id;
        const risk = this.state.risk;
        const day_placed = this.state.day_placed;
        const oddspicked = this.state.oddspicked;
        return ( 
            <div class="RegisterForm">
                <h3>create bet!</h3>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <input class="m-2" name="game_id" type="text" placeholder="game id" value={game_id} onChange={this.handleChange} />
                    <input class="m-2" name="risk" type="text" placeholder="risk $" value={risk} onChange={this.handleChange} />
                    <br />
                    <input class="m-2" name="day_placed" type="date" placeholder="day placed" value={day_placed} onChange={this.handleChange} />
                    <input class="m-2" name="oddspicked" type="text" placeholder="Slip Odds" value={oddspicked} onChange={this.handleChange} />
                    <br />
                    <input id="newUserButton" name="submit" type="Submit" value="Complete Bet Slip" className="btn btn-secondary m-2" />
                </form>
            </div>
         );
    }
}
 
export default CreateBet;


// import React, {useEffect, useState} from 'react';
// import axios from 'axios'
// import SearchBets from './SearchBets';
// import Userbets from './Userbets';
// import { ListGroup, ListGroupItem, Button } from 'react-bootstrap';


// const CreateBet = (props) => {
    
//     return (
//         <ListGroup horizontal id="boxborder">
//             <ListGroupItem>
//                 {console.log(props.makeBet)}
//                 {props.makeBet.map((bet, index) => {
//                     return (
//                         <div key={index}>
//                             {" "}
//                         <ListGroupItem>
//                     <form  onSubmit={(event) => props.handlesubmit(event)}>
//                         <label>Odds</label>
//                         <input name="" onChange={props.handleChange} value = {bet.oddspicked}/>
//                         <label>Game ID</label>
//                         <input name="album" onChange={props.handleChange} value = {bet.game_id}/>
//                         <label>Risk</label>
//                         <input name="artist" onChange={props.handleChange} value = {bet.risk}/>
//                         <label>Day placed</label>
//                         <input name="release_date" onChange={props.handleChange} value = {bet.day_placed}/>
//                         <button type="submit">Create Bet</button>
//                     </form>

//                         </ListGroupItem>
//                         </div>
//                     );
//                 })}
//             </ListGroupItem>



//         </ListGroup>

        

//     );
// };


// export default CreateBet; 