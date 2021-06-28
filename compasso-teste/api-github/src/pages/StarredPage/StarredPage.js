import React, { useState } from 'react'
import ListComponent from '../../components/ListComponent/ListComponent'
import { StarredContainer } from './styled'
import { Typography } from '@material-ui/core'
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/requestConstants'

const StarredPage = (props) => {
    const starred = useRequestData([], `${BASE_URL}/${props.search}/starred`)
    console.log(starred)

    const starredList = starred.map((star)=> {
        return <ListComponent
                name={star.name}
                url={star.html_url}/>
    })

    return (
        <StarredContainer>
            <Typography gutterBottom color="primary" variant="h5" component="h2">
                Repositórios com estrelas:
            </Typography>
            {starredList}
        </StarredContainer>
    )
}

export default StarredPage