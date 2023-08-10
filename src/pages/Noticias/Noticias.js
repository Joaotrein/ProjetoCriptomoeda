import Sidebar from "../../Components/Sidebar/Sidebar";
import NewsApi from "../../CriptoNewsApi/ApiNews"

function Noticia() {
    return (
        <>
            <Sidebar /> 

            <h1 className='home-title'>
                <span>Notícias sobre Criptomoedas</span>
            </h1>
            <NewsApi />
        </>
    )
}

export default Noticia