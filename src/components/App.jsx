import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import LoginPage from './Login/LoginPage';
import jwtDecode from 'jwt-decode'
import NavBar from './NavBar/NavBar';


function App(){
    const [currentUser, setCurrentUser] = useState('');

    useEffect(() => {
        const jwt = localStorage.getItem('token')
        console.log('use Effect mounted')
        const user = jwtDecode(jwt);
        console.log(user)

        if (user) {
            setCurrentUser(user);
        }
    }, [currentUser])



    return (
        
        <div>
            <NavBar user={currentUser}/>
            <Switch>
                <Route path='/login' component={LoginPage} />
            </Switch>
        </div>
                    
    );
    
}

export default App;