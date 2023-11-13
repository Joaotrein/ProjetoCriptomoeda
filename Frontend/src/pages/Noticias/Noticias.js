import SidebarHeader from "../../Components/SidebarHeader/SidebarHeader";
import { Title } from "../../Components/TitleStyle/Style";
import NewsApi from "../../CriptoNewsApi/ApiNews";

function Noticia() {
    return (
        <>
            <SidebarHeader />

            <Title>
                <h1>
                    <span>Notícias sobre criptomoedas</span>
                </h1>
            </Title>
            <NewsApi />
        </>
    );
}

export default Noticia;
