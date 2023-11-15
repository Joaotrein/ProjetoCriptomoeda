import SidebarHeader from "../../Components/SidebarHeader/SidebarHeader";
import { Title } from "../../Components/TitleStyle/Style";

function Chatbot() {
    return (
        <>
            <SidebarHeader />
            <Title>
                <h1>
                    <span>Chatbot Cripto</span>
                </h1>
            </Title>

            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <iframe
                    src="https://joaotrein.github.io/ChatbotDialogFlow/"
                    width="500"
                    height="750"
                    title="Chatbot"
                    style={{ border: "none", boxShadow: "3px 4px 4px black" }}
                ></iframe>
            </div>
        </>
    );
}

export default Chatbot;
