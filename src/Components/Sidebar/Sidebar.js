import React from 'react';
import { Link } from 'react-router-dom'; 
import { Container, Content } from './Sidebar.jsx';
import { TbCoinBitcoin } from 'react-icons/tb';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { BsWallet2, BsGraphUpArrow, BsShieldLock, BsNewspaper } from 'react-icons/bs';
import { TbCoins } from 'react-icons/tb';
import { MdBalance } from 'react-icons/md';
import { RxExit } from 'react-icons/rx';
import { FaTimes } from 'react-icons/fa';

import SidebarItem from '../SidebarItem/SidebarItem';

const Sidebar = ({ active }) => {

  const closeSidebar = () => {
    active(false);
  }

  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />
      <Content>
        <SidebarItem Icon={TbCoinBitcoin} Text={<Link to="../oquesao">O que são criptomoedas?</Link>} />
        <SidebarItem Icon={AiOutlineQuestionCircle} Text={<Link to="../funcaomoeda">Para que elas servem?</Link>} />
        <SidebarItem Icon={BsWallet2} Text={<Link to="../obter">Como posso obte-lás?</Link>} />
        <SidebarItem Icon={BsShieldLock} Text={<Link to="../seguras">Elas são seguras?</Link>} />
        <SidebarItem Icon={TbCoins} Text={<Link to="../existem">Quantas existem</Link>} />
      <SidebarItem Icon={MdBalance} Text={<Link to="../direitos">Quais direitos eu possuo?</Link>} />
        <SidebarItem Icon={BsGraphUpArrow} Text={<Link to="../investir">Como investir?</Link>} />
        <SidebarItem Icon={BsNewspaper} Text={<Link to="../noticias">Notícias</Link>} />
        <SidebarItem Icon={RxExit} Text={<Link to="../">Sair</Link>} />
      </Content>
    </Container>
  )
}

export default Sidebar;
