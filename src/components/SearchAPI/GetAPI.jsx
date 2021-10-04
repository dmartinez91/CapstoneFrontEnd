import axios from "axios";
import React, {useEffect, useState} from 'react';
import ShowAPI from "./ShowAPI";

const GetAPI = () => {
    const [apiResults, setAPIResults] = useState([]);

    useEffect(() => {
        makeGetRequest();
    }, [])

    const makeGetRequest = async () => {
        try{
            let response = await axios.get('https://api.the-odds-api.com/v4/sports/americanfootball_nfl/odds/?regions=us&oddsFormat=american&apiKey=0a73f66454ac71637bf496a86389eb9f')
            console.log(response)
            if (response.data) {
                setAPIResults(response.data)
            }
            
        }
        catch(ex){
            console.log(ex)
        }
    }

    return (
        <div> 
            <ShowAPI displaySearch={makeGetRequest}/>
            
        </div>
    )

}

export default GetAPI;