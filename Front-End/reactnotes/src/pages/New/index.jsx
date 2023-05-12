import { useState } from 'react';
import {Header} from '../../components/Header';
import { Container, Form } from './styles';
import {Input} from '../../components/Input';
import {Textarea} from '../../components/Textarea';
import {NoteItem} from '../../components/NoteItem';
import {Section} from '../../components/Section';
import {Button} from '../../components/Button';
import { Link } from 'react-router-dom';
import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

export function New() {
  
  const [links, setLinks] = useState([])
  const [newLink, setNewLink] = useState('')

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState('')

  const [title, setTitle] = useState('')
  const [descriptions, setDescription] = useState('')

  const navigate = useNavigate()

  function handleAddLink() {
    setLinks(prevState => [...prevState, newLink])
    setNewLink('')
  }

  function handleRemoveLink(linkDeleted) {
    setLinks(prevState => prevState.filter(link => link !== linkDeleted))
  }

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag])
    setNewTag('')
  }

  function handleRemoveTag(tagDeleted) {
    setTags(prevState => prevState.filter(tag => tag !== tagDeleted))
  }


  async function handleNewNote() {
    
    if (!title) {
      return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Título obrigatório'
      })
    }
    if (!descriptions) {
      return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Descrição é obrigatório'
      })
    }
    if (newLink) {
      return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Ficou um link sem ser adicionado'
      })
    } else if (links.length === 0) {
      return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Coloque um link pelo menos'
      })
    }
    if (newTag) {
      return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Ficou uma tag sem ser adicionada'
      })
    }
    if (tags.length <= 0) {
      return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Coloque uma tag pelo menos'
      })
    }
    await api.post('/notes', {
      title,
      descriptions,
      tags,
      links
    })
      return Swal.fire({
        icon: 'info',
        title: 'Nota Cadastrada!',
        text: 'Sua nota foi cadastrada com sucesso!'
      }),
      navigate("/")
  }

  return (
    <Container>
      <Header/>

        <main>
          <Form>
            <header>
              <h1>Criar Nota</h1>
              <Link to="/">Voltar</Link>
            </header>

            <Input 
            placeholder="Título"
            onChange={e => setTitle(e.target.value)}
            />
              <Textarea 
              placeholder="Observações"
              onChange={e => setDescription(e.target.value)}
              />
              
              <Section title="Links Úteis">
                {links.map((link, index) => (
                  <NoteItem
                    key={String(index)}
                    value={link}
                    onClick={() => handleRemoveLink(link)}
                  />
              ))}
                <NoteItem  
                isNew
                placeholder="Link"
                value={newLink}
                onChange={e => setNewLink(e.target.value)}
                onClick={handleAddLink}
                />
              </Section>

              <Section title="Marcadores">
                <div className="tags">
                  {tags.map((tag, i) => (
                  <NoteItem
                    key={String(i)}
                    value={tag}
                    onClick={() => handleRemoveTag(tag)}
                  />
                ))}
                  <NoteItem  
                    isNew
                    placeholder="Nova Tag"
                    onChange={e => setNewTag(e.target.value)}
                    value={newTag}
                    onClick={handleAddTag} 
                  />
                </div>
              </Section>
              <Button 
                title="Salvar"
                onClick={handleNewNote}    
              />
          </Form>
        </main>
        
    </Container>
  )
}