import React from 'react'
import { useContext } from 'react'
import { SidebarContext } from '../../Utilities/Context/SidebarContext'
const Sidebar = ({viewSidebar}) => {
    const {showSidebar} = useContext(SidebarContext)
  return (
    <div className='w-[20vw] h-[100vh] bg-red-900 absolute top-0 ' style={showSidebar ? {left:"0px"} : {left : "-20vw"}} >Sidebar</div>
  )
}

export default Sidebar