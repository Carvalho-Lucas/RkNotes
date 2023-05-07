import { Container } from "./styles";

export function Button({title, loading = false, ...rest}){
  return(
  <Container 
    type="button"
    disabled={loading}
    {...rest} //para não precisar passar todas propriedades
  >
    {loading ? 'Carregando...': title}
  </Container>
  )
}