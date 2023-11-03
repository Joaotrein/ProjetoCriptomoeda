import SidebarHeader from '../../Components/SidebarHeader/SidebarHeader'
import NewsApi from "../../CriptoNewsApi/ApiNews"

function Noticia() {
    return (
        <>
            <SidebarHeader />

            <h1 className='home-title'>
                <span>Notícias sobre Criptomoedas</span>
            </h1>
            <NewsApi />
        </>
    )
}

export default Noticia