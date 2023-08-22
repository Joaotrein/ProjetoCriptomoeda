import React, { useState } from 'react'
import { Container } from './Style'
import { FaBars } from 'react-icons/fa'
import Sidebar from '../Sidebar/Sidebar'

const SidebarHeader = () => {
  const [sidebar, setSidebar] = useState(false)

  const showSiderbar = () => setSidebar(!sidebar)

  return (
    <Container>
      <FaBars onClick={showSiderbar} />
      {sidebar && <Sidebar active={setSidebar} />}
    </Container>
  )
}

export default SidebarHeader