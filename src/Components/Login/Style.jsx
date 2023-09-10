import styled from 'styled-components'

export const PaginaFormulario = styled.div`
  width: 360px;
  padding: 4vw 0 0;
  margin: auto;

  @media(max-width: 425px){
    width: 250px;
  }
`
export const Formulario = styled.form`
  position: relative;
  z-index: 1;
  border-radius: 6px;
  background: var(--fundo-divisoes);
  max-width: 360px;
  padding: 35px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);

 h2 {
  color: var(--branco);
  font-size: 30px;
  margin-bottom: 25px;
}

> input{
    outline: 0;
    background: var(--fundo-input);
    width: 100%;
    border: 0;
    border-radius: 6px;
    margin: 0 0 15px;
    padding: 15px;
    box-sizing: border-box;
    font-size: 14px;
    font-weight: 600;
}

> button a {
  text-decoration: none;
  color: var(--branco);
}

> button{
    outline: 0;
    background: var(--laranja-escuro);
    width: 100%;
    border: 0;
    padding: 15px;
    color: var(--branco);
    font-weight: 700;
    font-size: 14px;
    border-radius: 6px;
    -webkit-transition: all 0.3 ease;
    transition: all 0.3 ease;
    cursor: pointer;
    &:hover{background: var(--laranja-claro);}
}

@media(max-width: 425px){
    h2 {
      font-size: 30px;
      margin-bottom: 0px;
    }
  }
`
export const Mensagem = styled.p`
  margin: 15px 0 0;
  color: var(--branco);
  font-weight: 700;
  font-size: 14px;

a {
  color: var(--fundo-palavras-destaque);
  text-decoration: none;
  &:hover{
    text-decoration: underline;
  }
}

`

export const MensagemErro = styled.p`
  color: var(--vermelho);
  font-weight: 700;
  font-size: 12px;
  background-color: var(--fundo-input);
  border-radius: 9px;
  padding: 0.5vw;
  margin: 0 0 1vw 0;
`