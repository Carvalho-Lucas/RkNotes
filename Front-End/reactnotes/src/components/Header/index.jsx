import {RiShutDownLine} from 'react-icons/ri';
import { Container, Profile, Logout } from "./styles";
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'
import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'

export function Header(){
  const { signOut, user } = useAuth()

  const avatarUrl = user.avatar
  ? `${api.defaults.baseURL}/files/${user.avatar}`
  : avatarPlaceholder

  return(
    <Container>
      <Profile to="/profile">
        <img src={avatarUrl} alt="{user.name}"/>
        <div className="message-Welcome">
          <span>Bem-Vindo</span>
          <strong>{user.name}</strong>
        </div>
      </Profile>
      <Logout onClick={signOut}>
      <RiShutDownLine/>
      </Logout>
    </Container>
  )
}