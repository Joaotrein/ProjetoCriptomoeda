import { Link } from 'react-router-dom'
import { PaginaFormulario,Formulario, Mensagem} from '../Login/Formularios.jsx'
function Recuperar() {
    return (
        <>
            <PaginaFormulario>
                <Formulario>
                    <h2>Definir nova senha</h2>
                    <input type="text" placeholder="Digite Seu E-mail"/>
                    <button>Enviar</button>
                    <Mensagem><Link to={"/"}>Voltar a Tela de Login</Link></Mensagem>
                </Formulario>
            </PaginaFormulario>
        </>
    )
}

export default Recuperar