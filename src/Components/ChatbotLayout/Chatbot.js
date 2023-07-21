import { CaixaTexto, FundoChat } from "./Chatbot.jsx"
import { RiSendPlaneFill } from "react-icons/ri"

function Chatbot() {

    return (
        <>
            <FundoChat>
                <CaixaTexto>
                    <input placeholder="Digite sua pergunta aqui!" />
                    <button>
                        <RiSendPlaneFill />
                    </button>
                </CaixaTexto>
            </FundoChat>
        </>
    )
}

export default Chatbot