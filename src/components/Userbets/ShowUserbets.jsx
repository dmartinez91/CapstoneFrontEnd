import axios from "axios";
import React, {useEffect, useState} from 'react';
import jwtDecode from "jwt-decode";
import SearchBets from "./SearchBets";
import ShowUserbets from './ShowUserbets'


const MakeSearch = () => {
    const [searchResults, setSearchResults] = useState([]);
    // const [games, SetGames] = useState("")

    useEffect(() => {
        makeGetRequest();
    }, [])

    const makeGetRequest = async (values) => {
        try{
            let response = await axios.get('http://127.0.0.1:8000/api/bets/')
            setSearchResults(response.data.items)
        }
        catch(ex){
            console.log(ex)
        }
    }

    return (
        <div> 
            <SearchBets makeSearch={makeGetRequest}/>
            <ShowUserbets displaySearch={searchResults}/>
        </div>
    )

}

export default MakeSearch;