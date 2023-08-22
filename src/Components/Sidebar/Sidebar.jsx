import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

export const Container = styled.div`
  background-color: var(--fundo-azul-escuro);
  position: fixed;
  height: 100%;
  top: 0;
  left: ${props => (props.sidebar ? '0' : '-100%')};
  width: 300px;
  animation: ${props => (props.sidebar ? slideIn : slideOut)} 0.4s;
  z-index: 1;

  > svg {
    position: absolute;
    color: white;
    width: 30px;
    height: 30px;
    margin-top: 32px;
    margin-left: 32px;
    cursor: pointer;
  }
`;

export const Content = styled.div`
  margin-top: 100px;
`;
