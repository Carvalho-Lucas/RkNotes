import { Container, Form, Avatar } from './styles'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'
import { Link } from 'react-router-dom'


export function Profile() {
  return (
    <Container>
      <header>
        <Link to="/">
        <FiArrowLeft />
        </Link>
      </header>

      <Form>
        <Avatar>
          <img src="https://github.com/Carvalho-Lucas.png" alt="Foto do usuário" />
          <label htmlFor="avatar">
            <FiCamera />
            <input id="avatar" type="file" />
          </label>
        </Avatar>

        <Input 
          type="text" 
          placeholder="Nome" 
          icon={FiUser} 
        />

        <Input 
          type="text" 
          placeholder="E-mail" 
          icon={FiMail} 
        />

        <Input 
          type="password" 
          placeholder="Senha Atual" 
          icon={FiLock} 
        />
        <Input 
          type="password" 
          placeholder="Nova Senha" 
          icon={FiLock} 
        />

        <Button title="Salvar"></Button>
      </Form>
    </Container>
  )
}