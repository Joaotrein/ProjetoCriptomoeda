import styled from 'styled-components'

export const Cabecalho = styled.div`
    background-color: var(--fundo-divisoes);
    box-shadow: 2px 8px 2px 1px rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
    text-align: center; 
    height: 15vh;

> img {
    width: 7vw;
    padding: 10px;
    left: 0;
    position: absolute;
}

h1{
    padding: 0; 
}

span{
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--fundo-palavras-destaque);
    font-weight: 900;
    font-size: 3.2vw;
    text-transform: uppercase;
   
}
`

export const Container = styled.div`
  height: 100px;
  display: flex;
  background-color: #1A202C; 
  box-shadow: 0 0 20px 3px;

  > svg {
    position: fixed;
    color: white;
    width: 30px;
    height: 30px;
    margin-top: 32px;
    margin-left: 32px;
    cursor: pointer;
  }
`;


