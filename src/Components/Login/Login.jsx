import styled from 'styled-components'

export const PaginaFormulario = styled.div`
  width: 360px;
  padding: 7vw 0 0;
  margin: auto;
`
export const Formulario = styled.div`
  position: relative;
  z-index: 1;
  border-radius: 6px;
  background: #003296;
  max-width: 360px;
  padding: 45px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);

> h2 {
  color: white;
  font-size: 30px;
  margin-bottom: 30px;
}

> input{
    outline: 0;
    background: #f2f2f2;
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
  color: #FFFFFF;
}

> button{
    outline: 0;
    background: #EBAB1C;
    width: 100%;
    border: 0;
    padding: 15px;
    color: #FFFFFF;
    font-weight: 700;
    font-size: 14px;
    border-radius: 6px;
    -webkit-transition: all 0.3 ease;
    transition: all 0.3 ease;
    cursor: pointer;
    &:hover{background: #dea20a;}

}
`
export const Mensagem = styled.p`
  margin: 15px 0 0;
  color: white;
  font-weight: 700;
  font-size: 14px;

> a {
  color: #FAB70B;
  text-decoration: none;
  &:hover{
    text-decoration: underline;
  }
}
`
