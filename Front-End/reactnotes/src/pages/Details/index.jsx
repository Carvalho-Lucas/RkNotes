import {Container, Links, Content} from './styles';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Section } from '../../components/Section';
import { Tags } from '../../components/Tags';
import { ButtonText } from '../../components/ButtonText';



export function Details(){
  return (
    <Container>
      <Header/>
      <main>
        <Content>
          <h1>Introdução ao React</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Doloremque id voluptates sed accusamus quam ipsum corporis quo et? Facilis, 
                nemo est commodi quia voluptates voluptate provident non excepturi ipsam? 
                Assumenda.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Doloremque id voluptates sed accusamus quam ipsum corporis quo et? Facilis, 
                nemo est commodi quia voluptates voluptate provident non excepturi ipsam? 
                Assumenda.
            </p>
          <ButtonText title="Excluir nota"/>

            <Section title="Links Úteis">
              <Links>
                <li><a href="https://github.com/Carvalho-Lucas" target='_blank'>https://github.com/Carvalho-Lucas</a></li>
                <li><a href="#">https://github.com/Carvalho-Lucas</a></li>
              </Links>
            </Section>

            <Section title="Marcadores">
                <Tags title="Express"/>
                <Tags title="Node"/>
            </Section>

          <Button title="Voltar"/>       
        </Content>
      </main>
    </Container>
    
  )
} 