import { Link } from 'react-router-dom'
import { PaginaFormulario, Formulario, Mensagem } from './Login.jsx'
function Login() {
    
    return (
        <>
            <PaginaFormulario>
                <Formulario>
                    <h2>login</h2>
                    <input
                        type="text"
                        placeholder="Digite Seu E-mail"
                    />

                    <input
                        type="password"
                        placeholder="Digite Sua Senha"
                    />

                    <button>
                        <Link to="oquesao">

                            Entrar</Link>
                    </button>
                    <Mensagem>Não possui conta? <Link to="Cadastrar">Cadastre-se!</Link></Mensagem>
                    <Mensagem>Esqueci a minha senha!<Link to="Redefinir">Recuperar Senha!</Link></Mensagem>
                </Formulario>
            </PaginaFormulario>
        </>
    )
}

export default Login