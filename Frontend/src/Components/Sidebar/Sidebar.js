import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Content } from "./Style.jsx";
import { FaTimes } from "react-icons/fa";
import SidebarItem from "../SidebarItem/SidebarItem";
import { TbCoinBitcoin } from "react-icons/tb";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import {
    BsWallet2,
    BsGraphUpArrow,
    BsShieldLock,
    BsNewspaper,
    BsRobot,
} from "react-icons/bs";
import { TbCoins } from "react-icons/tb";
import { MdBalance } from "react-icons/md";
import { RxExit } from "react-icons/rx";

const Sidebar = ({ active }) => {
    const closeSidebar = () => {
        active(false);
    };

    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");
        navigate("/");
    };

    const sidebarItems = [
        { Icon: TbCoinBitcoin, Text: "O que são criptomoedas?", Path: "../oquesao"},
        { Icon: AiOutlineQuestionCircle, Text: "Para que elas servem?", Path: "../funcaomoeda"},
        { Icon: BsWallet2, Text: "Como posso obtê-las?", Path: "../obter" },
        { Icon: BsShieldLock, Text: "Elas são seguras?", Path: "../seguras" },
        { Icon: TbCoins, Text: "Quantas existem", Path: "../existem" },
        { Icon: MdBalance,Text: "Quais direitos eu possuo?", Path: "../direitos"},
        { Icon: BsGraphUpArrow, Text: "Como investir?", Path: "../investir" },
        { Icon: BsNewspaper, Text: "Notícias", Path: "../noticias" },
        { Icon: BsRobot, Text: "Chatbot", Path: "../chatbot" },
        { Icon: RxExit, Text: "Sair", Path: "../", Action: logout },
    ];

    return (
        <Container sidebar={active}>
            <FaTimes onClick={closeSidebar} />
            <Content>
                {sidebarItems.map((item, index) => (
                    <SidebarItem
                        key={index}
                        Icon={item.Icon}
                        Text={
                            <Link to={item.Path} onClick={item.Action}>
                                {item.Text}
                            </Link>
                        }
                    />
                ))}
            </Content>
        </Container>
    );
};

export default Sidebar;
