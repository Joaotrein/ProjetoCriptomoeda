import {Cabecalho} from './Header.jsx'
import bitcoin from '../../assets/bitcoin.png'
function Header(){
    return(
        <>
        <Cabecalho>
            <img src={bitcoin} alt="Criptomoeda"></img>
        </Cabecalho>
        </>
    )
}

export default Header