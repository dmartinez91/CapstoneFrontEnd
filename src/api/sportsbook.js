import Axios from "axios"

const axios = Axios.create({

  baseURL: 'http://127.0.0.1:8000/api',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
})

const getBets = async () => {
    let response = await axios.get('/bets/all/')
    return response.data
}
            

const createBet = async () => {
    let response = await axios.post('http://127.0.0.1:8000/api/bets/all/')
    return response.data
}
            

const SportsBookModule = { getBets }

export default SportsBookModule
