import {RiShutDownLine} from 'react-icons/ri';
import { Container, Profile, Logout } from "./styles";

export function Header(){

  return(
    <Container>
      <Profile to="/profile">
        <img src="https://github.com/Carvalho-Lucas.png" alt="Foto do Usuário"/>
        <div className="message-Welcome">
          <span>Bem-Vindo</span>
          <strong>Lucas Carvalho</strong>
        </div>
      </Profile>
      <Logout>
      <RiShutDownLine/>
      </Logout>
    </Container>
  )
}