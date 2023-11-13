import styled from "styled-components";

export const ContainerConteudo = styled.div`
  display: flex;
  padding: 2vw;
  margin-top: 10vh;
  background-color: var(--fundo-conteudos);
  width: 70%;
  margin: auto;
  border-radius: 15px 15px 0px 0px;
  height: auto;
  flex-direction: column;

  p { 
    font-size: 23px;
    text-align: justify;
    margin-bottom: 1rem;
  }

  @media(max-width: 425px){
    p{
      text-align: left;
      font-size: 20px;
    }
  }
`;

