import { UserContainer } from './styled'
import DetailCard from '../DetailCard/DetailCard'

const DetailUserComponent = (props) => {
    return (
        <UserContainer>
            <DetailCard user={props.user}/>
        </UserContainer>
    )
}

export default DetailUserComponent