import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import LoginPage from './Login/LoginPage';
import jwtDecode from 'jwt-decode'
import NavBar from './NavBar/NavBar';
import RegisterForm from './Register/Register';
import Profile from './Profile/Profile';
import MakeSearch from './Games/MakeSearch'
import ShowUserbets from './Userbets/ShowUserbets';
import ShowAPI from './SearchAPI/ShowAPI';


function App(){
    const [currentUser, setCurrentUser] = useState(undefined);



    const makeGetRequest = async (values) => {
 
    }
    

    useEffect(() => {
        makeGetRequest();
        try{
            const jwt = localStorage.getItem('token')
            console.log('use Effect mounted')
            const user = jwtDecode(jwt);
            console.log(user)

            if (user) {
                setCurrentUser(user);
            }
        }
        catch{
            console.log("Somethingelse")
        }
        
    }, [])

    return (
        
        <div>
            <NavBar user={currentUser}/>
            <Switch>
                <Route path='/login' component={LoginPage} />
                <Route path='/register' component={RegisterForm} />
                <Route path='/games' component={MakeSearch} />
                <Route path='/sportsbooks' component={ShowAPI} />
                <Route path='/mybets' component={ShowUserbets} />
            </Switch>
        </div>
                    
    );
    
}

export default App;