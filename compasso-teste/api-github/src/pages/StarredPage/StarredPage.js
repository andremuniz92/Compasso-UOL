import React from 'react'
import ListComponent from '../../components/ListComponent/ListComponent'
import { StarredContainer } from './styled'
import { Typography } from '@material-ui/core'
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/requestConstants'
import { useParams } from 'react-router-dom'

const StarredPage = () => {
    const param = useParams()
    const starred = useRequestData([], `${BASE_URL}/${param.user}/starred`)

    const starredList = starred.map((star)=> {
        return <ListComponent
                name={star.name}
                url={star.html_url}/>
    })

    return (
        <StarredContainer>
            <Typography gutterBottom color="primary" variant="h5" component="h2">
                Repositórios mais visitados:
            </Typography>
            {starredList}
        </StarredContainer>
    )
}

export default StarredPage