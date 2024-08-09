import { createContext } from "react";
import { useState } from "react";
const SidebarContext = createContext()

const SidebarContextProvider = ({children}) =>{
    const [showSidebar , setShowSidebar] = useState(false)
    return(
        <SidebarContext.Provider value={{showSidebar , setShowSidebar}} >{children}</SidebarContext.Provider>
    )
}

export {SidebarContext , SidebarContextProvider}