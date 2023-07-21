import styled from 'styled-components';


export const FundoChat = styled.section`
    background-color: #e4e4e4eb;
    width: 70%;
    height: 75%;
    position: fixed;
    left: 15%;
    border-radius: 12px;
    box-shadow: black 3px 3px 3px 3px ;

`

export const CaixaTexto = styled.div`
  background-color: #ffffffeb;
  width: 40%;
  display: flex;
  height: 5vh;
  border: none;
  border-radius: 12px;
  position: fixed;
  bottom: 3vh; 
  left: 30%;
  font-size: 16px;
  box-shadow: black 3px 3px 3px 3px ;

  input{
    width: 100%;
    height: 3vh;
    border-radius: 12px;
    height: auto;
    border: none;
    padding: 10px;

    &:focus {
    outline: none;
    box-shadow: none;
  }
  }

  button{
    border: none;
    border-radius: 12px;
    padding: 8px;
    background-color: #ffffffeb;
    cursor: pointer;
    font-size: 16px;
    color: #003296;
  }
  
`;
