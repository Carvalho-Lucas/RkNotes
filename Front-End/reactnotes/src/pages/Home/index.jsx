import { FiPlus, FiSearch} from 'react-icons/fi';
import {Container, Brand, Menu, Search, Content, NewNote} from './styles';
import { useState, useEffect } from 'react'
import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { Section } from '../../components/Section';
import { Note } from '../../components/Note';
import { api } from '../../services/api'
import { useNavigate } from 'react-router-dom'

export function Home(){

  const [tags, setTags] = useState([])
  const [tagsSelected, setTagsSelected] = useState([])
  const [search, setSearch] = useState('')
  const [notes, setNotes] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    async function fetchTags() {
      const response = await api.get('/tags')
      setTags(response.data)
    }

    fetchTags()
  }, [])

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(
        `/notes?title=${search}&tags=${tagsSelected}`
      )
      setNotes(response.data)
    }
    fetchNotes()
  }, [tagsSelected, search])


 return(
  <Container>
    <Brand>
      <h1>Rocket Notes</h1>
    </Brand>
      <Header/>    
        <Menu>
        <li><ButtonText title="Todos" isActive/></li>
        {
          tags && tags.map(tag => (
            <li key={String(tag.id)}>
            <ButtonText 
              title={tag.name}/>
          </li>
          ))
        }
        </Menu>

    <Search>
      <Input placeholder="Pesquisar Pelo Título:" icon={FiSearch}/>
    </Search>
  
    <Content>
      <Section title="Minhas Notas">
      <Note data= {{
        title: 'React',
        tags: [
          { id: '1', name: 'React'},
          { id: '2', name: 'React-Native'}
          ]
          }}
          />
        </Section>
    </Content>

    <NewNote to="/new">
      <FiPlus/>
      Criar Nota
    </NewNote>
  
  </Container>
 );
}