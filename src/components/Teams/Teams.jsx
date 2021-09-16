import React, { useState, useEffect } from 'react'
import axios from 'axios';


function Teams(){
    const nflTeams = ['dolphins', 'Patriots', 'Jets', 'Bills'];
    const [activeTeamIndex, setActiveTeamIndex] = useState(0);
    const [games, setGames] = useState([]);

    useEffect(() => {
        console.log('Use Effect Running');
        getGames(); 
    }, [activeTeamIndex]);

    async function getGames() {
        let response = await axios.get(`http://127.0.0.1:8000/api/games/all/`);
        setGames(response.data);
        console.log(response);
    }

    function incrementValidIndex(){
        if (activeTeamIndex === nflTeams.length - 1){
            setActiveTeamIndex(0)
        } else {
            setActiveTeamIndex(activeTeamIndex + 1)
        }
    }

}

export default Teams;

