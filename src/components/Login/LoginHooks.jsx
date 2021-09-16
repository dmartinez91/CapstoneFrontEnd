import axios from "axios";

const LoginUser = (username, password) => {
    const userCredentials = {
        username: username,
        password: password,
    }

    async function makeLoginRequest(userCredentials) {
        try{
            let response = await axios.post('http://127.0.0.1:8000/api/auth/login/', userCredentials);
            localStorage.setItem('token', response.data.access);
            console.log("good login");
            console.log(localStorage)
            console.log(response.data.access);
            window.location = '/';
        }
        catch(err){
            console.log(err)
        }

    }

    makeLoginRequest(userCredentials)


}
 
export default LoginUser;