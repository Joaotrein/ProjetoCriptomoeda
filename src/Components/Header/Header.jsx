import styled from 'styled-components'

export const Cabecalho = styled.div`
    width: 100%;
    background-color: var(--fundo-divisoes);
    box-shadow: 2px 8px 2px 1px rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
    text-align: center; 
    height: 15vh;

> img {
    width: 100px;
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
    font-size: 40px;
    text-transform: uppercase;
   
}
`


