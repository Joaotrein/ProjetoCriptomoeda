import React, { useState } from 'react';
import { ContainerTexto, ContainerConteudo, BotaoConcluir, BotaoConta, MensagemHover } from './Content.jsx';
import { MdAccountCircle } from "react-icons/md";
import { BsFillCheckCircleFill } from "react-icons/bs";

const Content = ({ color, children }) => {
  return (
    <ContainerConteudo>
      {React.Children.map(children, (child) => (
        <ContainerTexto color={color}>{child}</ContainerTexto>
      ))}
    </ContainerConteudo>
  );
 
  const [mostrarMensagemConta, setMostrarMensagemConta] = useState(false);
  const [mostrarMensagemConcluir, setMostrarMensagemConcluir] = useState(false);

  const handleMouseEnterConta = () => {
    setMostrarMensagemConta(true);
  };

  const handleMouseLeaveConta = () => {
    setMostrarMensagemConta(false);
  };

  const handleMouseEnterConcluir = () => {
    setMostrarMensagemConcluir(true);
  };

  const handleMouseLeaveConcluir = () => {
    setMostrarMensagemConcluir(false);
  };

  return (
    <>
      <BotaoConta onMouseEnter={handleMouseEnterConta} onMouseLeave={handleMouseLeaveConta}>
        <MdAccountCircle />
        {mostrarMensagemConta && <MensagemHover>Ver sua conta</MensagemHover>}
      </BotaoConta>

      <BotaoConcluir onMouseEnter={handleMouseEnterConcluir} onMouseLeave={handleMouseLeaveConcluir}>
        <BsFillCheckCircleFill />
        {mostrarMensagemConcluir && <MensagemHover>Concluir capítulo</MensagemHover>}
      </BotaoConcluir>


    </>
  );
};

export default Content;
