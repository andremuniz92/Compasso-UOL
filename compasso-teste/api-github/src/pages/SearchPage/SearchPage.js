import React, {useState} from 'react'
import logo from '../../assets/logo.png'
import {ScreenContainer, LogoImage, InputContainer} from './styled'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { searchUser } from '../../services/user'
import DetailUserComponent from '../../components/DetailUserComponent/DetailUserComponent'

const SearchPage = (props) => {
    const [user, setUser] = useState('')
    const {search, setSearch} = props
    
    const onChangeUser = (event) => {
        setSearch(event.target.value)
    }

    console.log(user)
    
    return (
        <ScreenContainer>
            <LogoImage src={logo}/>
            {!user ? 
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
                    onClick={()=>searchUser(search, setUser)}
                >Procurar</Button>
            </InputContainer> 
            :
            <DetailUserComponent user={user}/>}
        </ScreenContainer>
    )
}

export default SearchPage