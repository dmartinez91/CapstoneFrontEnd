import axios from "axios";
import React, {useEffect, useState} from 'react';
import jwtDecode from "jwt-decode";
import SearchBets from "./SearchBets";
import Userbets from "./Userbets";



const ShowUserbets = () => {
    const [searchResults, setSearchResults] = useState([]);
    const [payout, setPayout] = useState("")

    useEffect(() => {
        makeGetRequest();
    }, [])

    const makeGetRequest = async (values) => {
        try{
            let response = await axios.get('http://127.0.0.1:8000/api/bets/all/', values)
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
            <SearchBets makeSearch={makeGetRequest}/>
            <Userbets displaySearch={searchResults}/>
            
        </div>
    )

}

export default ShowUserbets;