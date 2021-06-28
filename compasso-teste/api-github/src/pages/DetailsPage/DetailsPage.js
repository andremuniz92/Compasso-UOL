import React from 'react'
import { useParams } from 'react-router-dom'
import DetailUserComponent from '../../components/DetailUserComponent/DetailUserComponent'
import { BASE_URL } from '../../constants/requestConstants'
import useRequestData from '../../hooks/useRequestData'
import { ScreenContainer } from './styled'

const DetailsPage = (props) => {
    const pathParams = useParams()
    const userDetails = useRequestData([], `${BASE_URL}/${pathParams.user}`)

    return (
    <ScreenContainer>
        <DetailUserComponent user={userDetails}/>
    </ScreenContainer>)

}

export default DetailsPage