import { Link } from 'react-router-dom'
import { PaginaFormulario,Formulario, Mensagem} from '../Login/Login.jsx'
function Cadastro() {
    return (
        <>
           <PaginaFormulario>
                <Formulario>
                    <h2>Cadastro</h2>
                    <input type="text" placeholder="Digite Seu Nome" />
                    <input type="text" placeholder="Digite Seu E-mail" />
                    <input type="password" placeholder="Digite Sua Senha" />
                    <button>Criar conta</button>
                    <Mensagem>Já possui uma conta? <Link to="/">Voltar ao Login</Link></Mensagem>
                </Formulario>
            </PaginaFormulario>
        </>
    )   
}

export default Cadastro