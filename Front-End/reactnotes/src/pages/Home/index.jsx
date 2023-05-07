import { FiPlus, FiSearch} from 'react-icons/fi';
import {Container, Brand, Menu, Search, Content, NewNote} from './styles';

import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { Section } from '../../components/Section';
import { Note } from '../../components/Note';




export function Home(){
 return(
  <Container>
    <Brand>
      <h1>Rocket Notes</h1>
    </Brand>
      <Header/>    
        <Menu>
          <li><ButtonText title="Todos" isActive/></li>
          <li><ButtonText title="React"/></li>
          <li><ButtonText title="NodeJS"/></li>
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

    <NewNote>
      <FiPlus/>
      Criar Nota
    </NewNote>
  
  </Container>
 );
}