import {Header} from '../../components/Header';
import { Container, Form } from './styles';
import {Input} from '../../components/Input';
import {Textarea} from '../../components/Textarea';
import {NoteItem} from '../../components/NoteItem';
import {Section} from '../../components/Section';
import {Button} from '../../components/Button';
import { Link } from 'react-router-dom'

export function New() {
  return (
    <Container>
      <Header/>

        <main>
          <Form>
            <header>
              <h1>Criar Nota</h1>
              <Link to="/">Voltar</Link>
            </header>
            <Input placeholder="Título"/>
              <Textarea placeholder="Observações"/>
              <Section title="Links Úteis">
                <NoteItem value="https://github.com/Carvalho-Lucas"/>
                <NoteItem  placeholder="Link" isNew/>
              </Section>

              <Section title="Marcadores">
                <div class="tags">
                  <NoteItem value="React"/>
                  <NoteItem  placeholder="Nova Tag" isNew/>
                </div>
              </Section>
              <Button title="Salvar"/>
          </Form>
        </main>
        
    </Container>
  )
}