import styled from 'styled-components';

export const CardContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 70%;
  padding: 20px;
  margin: 20px auto;
  border-radius: 19px;

  @media (max-width: 768px) { 
    width: 100%;
    flex-direction: column; 
    align-items: center; 
}
`;

export const Cardnoticia = styled.div`
  width: calc(50% - 10px); 
  text-align: justify;
  background-color: white;
  padding: 25px;
  margin: 10px 0; 
  border-radius: 19px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: var(--fundo-palavras-destaque);
    font-size: 20px;
    margin-bottom: 10px;
  }

  img {
    width: 100%;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.3);
    border-radius: 9px;
  }

  p {
    font-size: 16px;
    margin: 10px 0;
  }

  button {
    color: #ffae00;
    font-size: 16px;
    font-weight: 700;
    text-decoration: none;
    border: none;
    padding: 10px;
    border-radius: 9px;
    cursor: pointer;
    background-color: #003296;
    &:hover {
      text-decoration: underline;
    }
  }
`;


