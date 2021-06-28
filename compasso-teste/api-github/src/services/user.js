import axios from 'axios'
import { BASE_URL } from '../constants/requestConstants';

export const searchUser = (search, setUser) => {
    axios.get(`${BASE_URL}/${search}`)
    .then((res) => {
        console.log(res.data)
        setUser(res.data)
    })
    .catch((err) => alert(err.response.data.message))
}
