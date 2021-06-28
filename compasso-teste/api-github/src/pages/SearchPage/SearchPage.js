import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import {ScreenContainer, LogoImage, InputContainer} from './styled'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { useHistory } from 'react-router-dom'
import { goToDetail } from '../../routes/coordinator'

const SearchPage = () => {
    const [search, setSearch] = useState('')
    const history = useHistory()

    const onChangeUser = (event) => {
        setSearch(event.target.value)
    }

    return (
        <ScreenContainer>
            <LogoImage src={logo}/>
            <InputContainer>
                <TextField
                    value={search}
                    onChange={onChangeUser}
                    label={"Usuário"}
                    variant={"filled"}
                    margin={"normal"}
                    fullWidth
                />
                <Button
                    margin={"normal"}
                    variant={"contained"}
                    color={"primary"}
                    fullWidth
                    onClick={()=>goToDetail(history,search)}
                >Procurar</Button>
            </InputContainer> 
        </ScreenContainer>
    )
}

export default SearchPage