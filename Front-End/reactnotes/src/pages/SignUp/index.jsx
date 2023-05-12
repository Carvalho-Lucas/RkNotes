import { useState } from 'react'
import { Container, Form, Background } from './styles'
import { Button } from '../../components/Button'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'


import { api } from '../../services/api';
import { Input } from '../../components/Input'

import { FiUser, FiMail, FiLock } from 'react-icons/fi'

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSignUp(){
    if(!name || !email || !password){
      //return alert("Preencha todos os campos!");
      return Swal.fire({
        icon: 'info',
        title: '🙄',
        text: 'Preencha todos os campos!'
      })
    }
    api.post('/users', { name, email, password })
    .then(() =>{
      //alert("Usuário cadastrado com sucesso!");
      return Swal.fire({
        icon: 'info',
        title: '😆',
        text: 'Usuário cadastrado com sucesso!'
      }),
      navigate('/');
    })
    .catch(error => {
      if (error.response){
        alert(error.response.data.message);
      }else {
        //alert("Não foi possível cadastrar!");
        Swal.fire({
          icon: 'info',
          title: '😣',
          text: 'Não foi possível cadastrar!'
        })
      }
    })
  }

  return (
    <Container>
      <Background />
      <Form>
        <h1>Rocket Notes</h1>
          <p>Aplicação para salvar e gerenciar seus links úteis.</p>
        <h2>Crie Sua Conta</h2>
        <Input 
          placeholder="Nome" 
          type="text" 
          icon={FiUser}
          onChange={event => setName(event.target.value)}
        />

        <Input 
          placeholder="E-mail" 
          type="text" 
          icon={FiMail} 
          onChange={event => setEmail(event.target.value)}
        />

        <Input 
        placeholder="Senha" 
        type="password" 
        icon={FiLock}
        onChange={event => setPassword(event.target.value)}
        />

        <Button title="Cadastrar" onClick={handleSignUp}></Button>
        <Link to="/">Voltar para Login</Link>
      </Form>
    </Container>
  )
}

