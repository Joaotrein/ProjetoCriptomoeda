import { Link } from 'react-router-dom';
import { PaginaFormulario, Formulario, Mensagem, MensagemErro} from '../Login/Style.jsx';
import React from 'react';
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from 'react-hook-form';

type CreateUserData = {
  name: string;
  email: string;
  password: string;
};  

const createUserFormSchema = yup.object().shape({
  name: yup.string().required('Nome é obrigatório').min(6, 'Nome deve ter no mínimo 6 caracteres'),
  email: yup.string().required('Email é obrigatório').email('Insira um Email válido'),
  password: yup.string().required('Senha é obrigatório').min(8, 'A senha deve conter no mínimo 8 caracteres')
});

function Cadastro() {
  const { register, handleSubmit, formState: { errors } } = useForm<CreateUserData>({
    resolver: yupResolver(createUserFormSchema) // Use o resolver para lidar com a validação
  });

  const handleCreateUser: SubmitHandler<CreateUserData> = async (data) => { // Receba o objeto 'data' contendo os valores do formulário
    alert("cadastro feito");
    console.log(data); // Exemplo de como acessar os dados do formulário
  };

  return (
    <>
      <PaginaFormulario>
        <Formulario action='' onSubmit={handleSubmit(handleCreateUser)}>
          <h2>Cadastro</h2>
          <input type="text" placeholder="Digite Seu Nome" {...register('name')} />
          {errors.name && <MensagemErro>{errors.name.message}</MensagemErro>}
          <input type="text" placeholder="Digite Seu E-mail" {...register('email')} />
          {errors.email && <MensagemErro>{errors.email.message}</MensagemErro>}
          <input type="password" placeholder="Digite Sua Senha" {...register('password')} />
          {errors.password && <MensagemErro>{errors.password.message}</MensagemErro>}
          <button type="submit">Criar conta</button>
          <Mensagem>Já possui uma conta? <Link to="/">Voltar ao Login</Link></Mensagem>
        </Formulario>
      </PaginaFormulario>
    </>
  );
}

export default Cadastro;