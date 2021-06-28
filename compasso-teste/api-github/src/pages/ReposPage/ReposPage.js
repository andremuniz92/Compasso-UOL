import React from 'react'
import ListComponent from '../../components/ListComponent/ListComponent'
import { BASE_URL } from '../../constants/requestConstants'
import useRequestData from '../../hooks/useRequestData'
import { Typography } from '@material-ui/core'
import { RepoContainer } from './styled'
import { useParams } from 'react-router-dom'


const ReposPage = (props) => {
    const param = useParams()
    const repos = useRequestData([], `${BASE_URL}/${param.user}/repos`)

    const reposList = repos.map((repo) => {
        return (
                <ListComponent
                key={repo.id} 
                name={repo.name}
                url={repo.html_url}
                />)
    })
    return (
        <RepoContainer>
            <Typography gutterBottom color="primary" variant="h5" component="h2">
                Repositórios:
            </Typography>
            {reposList}
        </RepoContainer>
    )
}

export default ReposPage