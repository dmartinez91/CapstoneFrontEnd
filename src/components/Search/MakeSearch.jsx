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
            let response = await axios.get('http://127.0.0.1:8000/api/games/all/')
            console.log(response)
            if (response.data) {
                setSearchResults(response.data)
            }
            
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