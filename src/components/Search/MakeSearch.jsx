import axios from "axios";
import React, {useEffect, useState} from 'react';
import SearchBar from "./SearchBar";
import jwtDecode from "jwt-decode";
import ShowSearch from "./ShowSearch";

const MakeSearch = () => {
    const [searchResults, setSearchResults] = useState([]);
    // const [games, SetGames] = useState("")

    useEffect(() => {
        makeGetRequest();
    }, [])

    const makeGetRequest = async (values) => {
        try{
            let response = await axios.get('https://api.the-odds-api.com/v4/sports/americanfootball_nfl/odds/?regions=us&oddsFormat=american&apiKey=0a73f66454ac71637bf496a86389eb9f')
            setSearchResults(response.data.items)
        }
        catch(ex){
            console.log(ex)
        }
    }

    return (
        <div> 
            <SearchBar makeSearch={makeGetRequest}/>
            <ShowSearch displaySearch={searchResults}/>
        </div>
    )

}

export default MakeSearch;