import { CaixaTexto, FundoChat } from "./Chatbot.jsx"
import { RiSendPlaneFill } from "react-icons/ri"

function Chatbot() {

    return (
        <>
            <FundoChat>
                <CaixaTexto />
                <button>
                    <RiSendPlaneFill />
                </button>
            </FundoChat>
        </>
    )
}

export default Chatbot