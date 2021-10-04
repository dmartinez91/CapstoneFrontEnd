import axios from "axios";
import React, {Component} from 'react';


class CreateGame extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            home_Team: '',
            away_Team: '',
            home_Team_Spread: '',
            away_Team_Spread: '',
            home_Team_ML: '',
            away_Team_ML: '',
            over_under: '',
            gameDay: '',
            sports_Book: ''
         }
    }

    async registerRequest(gameInfo){
        gameInfo = {
            home_Team: gameInfo.home_Team,
            away_Team: gameInfo.away_Team,
            home_Team_Spread: gameInfo.home_Team_Spread,
            away_Team_Spread: gameInfo.away_Team_Spread,
            home_Team_ML: gameInfo.home_Team_ML,
            away_Team_ML: gameInfo.away_Team_ML,
            over_under: gameInfo.over_under,
            gameDay: gameInfo.gameDay,
            sports_Book: gameInfo.sports_Book

        }
        console.log(gameInfo)
        try{
            let response = await axios.post('http://127.0.0.1:8000/api/bets/', { withCredentials: true }, gameInfo);
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
        const home_Team = this.state.home_Team;
        const away_Team = this.state.away_Team;
        const home_Team_Spread = this.state.home_Team_Spread;
        const away_Team_Spread = this.state.away_Team_Spread;
        const home_Team_ML = this.state.home_Team_ML;
        const away_Team_ML = this.state.away_Team_ML;
        const over_under = this.state.over_under;
        const gameDay = this.state.gameDay;
        const sports_Book = this.state.sports_Book;
        
        return ( 
            <div class="RegisterForm">
                <h3>create game!</h3>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <input class="m-2" name="home_Team" type="text" placeholder="home Team" value={home_Team} onChange={this.handleChange} />
                    <input class="m-2" name="away_Team" type="text" placeholder="away Team" value={away_Team} onChange={this.handleChange} />
                    <br />
                    <input class="m-2" name="home_Team_Spread" type="text" placeholder="Home Spread" value={home_Team_Spread} onChange={this.handleChange} />
                    <input class="m-2" name="away_Team_Spread" type="text" placeholder="Away spread" value={away_Team_Spread} onChange={this.handleChange} />
                    <br />
                    <input class="m-2" name="home_Team_ML" type="text" placeholder="Home Money Line" value={home_Team_ML} onChange={this.handleChange} />
                    <input class="m-2" name="away_Team_ML" type="text" placeholder="Away Money Line" value={away_Team_ML} onChange={this.handleChange} />
                    <input class="m-2" name="over_under" type="text" placeholder="over/under" value={over_under} onChange={this.handleChange} />
                    <input class="m-2" name="gameDay" type="date" placeholder="Game Day" value={gameDay} onChange={this.handleChange} />
                    <input class="m-2" name="sports_Book" type="text" placeholder="Sports Book" value={sports_Book} onChange={this.handleChange} />



                    
                    <input id="newUserButton" name="submit" type="Submit" value="Complete Bet Slip" className="btn btn-secondary m-2" />
                </form>
            </div>
         );
    }
}
 
export default CreateGame;