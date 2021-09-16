import React, { useState } from "react";
import LoginUser from "./LoginHooks";

const LoginForm = ({ loginUser }) => {
    //form variables
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const user = {};

    //stores user input in post request format and sends back to login page
    const handleSubmit = (event) => {
        event.preventDefault();
        
        //logging in with custom hook
        LoginUser(username, password);
        
        //resets form
        setUserName('');
        setPassword('');
    }

    //login form
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" placeholder="Username" value={username} onChange={(event) => setUserName(event.target.value)} />
                <input type="password" name="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} />
                <input type="submit" value="Login" class="btn btn-primary" />            
            </form>

        </div>
    );

}

export default LoginForm;