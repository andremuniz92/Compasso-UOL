import React, { useState } from 'react'
import ListComponent from '../../components/ListComponent/ListComponent'
import { BASE_URL } from '../../constants/requestConstants'
import useRequestData from '../../hooks/useRequestData'
import { Typography } from '@material-ui/core'
import { RepoContainer } from './styled'

const ReposPage = (props) => {
    const repos = useRequestData([], `${BASE_URL}/${props.search}/repos`)
    console.log(repos)

    const reposList = repos.map((repo) => {
        return (
                <ListComponent 
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