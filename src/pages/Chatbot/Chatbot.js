import SidebarHeader from "../../Components/SidebarHeader/SidebarHeader"

function Chatbot() {
    return (
        <>
            <SidebarHeader />
            <h1 className='home-title'>
                <span>Chatbot</span>
            </h1>

            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <iframe
                    src="https://joaotrein.github.io/ChatbotDialogFlow/"
                    width="500" 
                    height="450" // Ajuste a altura conforme necessário
                    title="Chatbot"
                    style={{ border: "none", boxShadow: "3px 4px 4px black"}}
                ></iframe>
            </div>
        </>
    )
}

export default Chatbot;
