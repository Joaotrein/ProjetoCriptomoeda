import { Sidenav, Navegation, ItemLista, Lista, Logo, Line} from "./Sidebar.jsx";
import bitcoin from "../../assets/bitcoin.png"
import { SiChatbot } from "react-icons/si"
import { TbCoinBitcoin } from "react-icons/tb"
import { AiOutlineQuestionCircle } from "react-icons/ai"
import { BsWallet2, BsGraphUpArrow, BsShieldLock} from "react-icons/bs"
import { TbCoins } from "react-icons/tb";
import { MdBalance } from "react-icons/md"
import { RxExit } from "react-icons/rx"
import { Link } from 'react-router-dom'



function Sidebar (){
    return(
        <>
        <Sidenav>
            <Navegation>
                <Lista>
                    <Logo>
                        <img src={bitcoin} alt="Criptomoeda BITCOIN"/>
                    </Logo>
                    <ItemLista>
                        <TbCoinBitcoin />
                        <i></i>
                        <p><Link to="../oquesao">O que são criptomoedas?</Link></p>
                    </ItemLista>

                    <ItemLista>
                        <AiOutlineQuestionCircle />
                        <i></i>
                        <p><Link to="../funcaomoeda">Para que elas servem?</Link></p>
                    </ItemLista>

                    <ItemLista>
                        <BsWallet2 />
                        <i></i>
                        <p><Link to="../obter">Como posso obte-lás?</Link></p>
                    </ItemLista>

                    <ItemLista>
                        <BsShieldLock />
                        <i></i>
                        <p><Link to="../seguras">Elas são seguras?</Link></p>
                    </ItemLista>

                    <ItemLista>
                        <TbCoins />
                        <i></i>
                        <p><Link to="../existem">Quantas existem</Link></p>
                    </ItemLista>

                    <ItemLista>
                        <MdBalance />
                        <i></i>
                        <p><Link to="../direitos">Quais direitos eu possuo?</Link></p>
                    </ItemLista>

                    <ItemLista>
                        <BsGraphUpArrow />
                        <i></i>
                        <p><Link to="../investir">Como investir?</Link></p>
                    </ItemLista>

                    <ItemLista>
                        <SiChatbot />
                        <i></i>
                        <p><Link to="../chatbot">Chatbot</Link></p>
                    </ItemLista>

                    <Line />

                    <ItemLista>
                        <RxExit />
                        <i></i>
                        <p><Link to="../">Sair</Link></p>
                    </ItemLista>
                </Lista>
            </Navegation>
        </Sidenav>
        </>
    )

}

export default Sidebar