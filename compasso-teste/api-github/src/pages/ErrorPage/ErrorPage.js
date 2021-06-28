import React from 'react'
import { ErrorImage, ErrorPageContainer } from './styled'
import erro  from '../../assets/error.jpg'
import Typography from '@material-ui/core/Typography'

const ErrorPage = () => {
    return (
        <ErrorPageContainer>
            <ErrorImage src={erro}/>
            <Typography color={'primary'} variant={'h4'} align={'center'}>
                Erro 404 - Página não encontrada    
            </Typography>
        </ErrorPageContainer>
    )
}

export default ErrorPage