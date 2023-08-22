import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  color: white;
  padding: 8px;
  cursor: pointer;
  margin: 0 0px 20px;

  a{ 
  text-decoration: none;
      color: #FFFFFF;
      font-weight: 500;
  }
  > svg {
    margin: 0 20px;
    font-size: 25px;
  }

  &:hover {
  background-image: linear-gradient(
    to right,
    #FFB800 10px,
    rgba(255, 255, 255, 0.1) 7px
  ); 
  }
`;