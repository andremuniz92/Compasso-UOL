import axios from 'axios'
import { useHistory } from 'react-router-dom';
import { BASE_URL, clientId, clientSecret } from '../constants/requestConstants';
import { goToRepos, goToStarred } from '../routes/coordinator';



export const searchUser = (search, setUser) => {
    axios.get(`${BASE_URL}/${search}`)
    .then((res) => {
        console.log(res.data)
        setUser(res.data)
    })
    .catch((err) => alert(err.response.data.message))
}

export const repos = (user, history) => {
    axios.get(`${BASE_URL}/${user}/repos`)
    .then((res) => {
        console.log(res.data)
        goToRepos(history)
    })
    .catch((err) => alert(err.response.data.message))
}

export const starred = (user, history, setSearch) => {
    axios.get(`${BASE_URL}/${user}/starred`)
    .then((res) => {
        console.log(res.data)
        goToStarred(history)
    })
    .catch((err) => alert(err.response.data.message))
}