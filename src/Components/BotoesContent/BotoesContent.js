import React, { useState } from 'react';
import { BotaoConcluir, BotaoConta, MensagemHover } from './BotoesContent.jsx';
import { MdAccountCircle } from "react-icons/md";
import { BsFillCheckCircleFill } from "react-icons/bs";


function BotoesContent() {
  
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
}

export default BotoesContent;
