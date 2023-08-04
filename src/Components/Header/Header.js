import {Cabecalho} from './Header.jsx'
import bitcoin from '../../assets/bitcoin.png'
function Header(){
    return(
        <>
        <Cabecalho>
            <img src={bitcoin} alt="Criptomoeda"></img>
            <h1>Cripto</h1><span>Educa</span>
        </Cabecalho>
        </>
    )
}

export default Header