import React from 'react'
import { useContext } from 'react'
import { SidebarContext } from '../../Utilities/Context/SidebarContext'
import PersonIcon from '@mui/icons-material/Person';
import CloseIcon from '@mui/icons-material/Close';
const Sidebar = ({viewSidebar}) => {
    const {showSidebar , setShowSidebar} = useContext(SidebarContext)
    function handleCloseSidebar(){
        setShowSidebar(false)
    }

    const navOptions = [
        {
            id: "men",
            text: "Men"
        },
        {
            id: "women",
            text: "Women"
        }, {
            id: "kid",
            text: "Kids"
        },
        {
            id: "pet",
            text: "Pets"
        },
        {
            id: "homeCare",
            text: "Home Care"
        }, {
            id: "autoMobileCare",
            text: "Auto Mobile Care"
        }, {
            id: "mobileCare",
            text: "Mobile Care"
        },
        {
            id: "autoMobileCare",
            text: "Auto Mobile Care"
        }, {
            id: "mobileCare",
            text: "Mobile Care"
        },
        {
            id: "autoMobileCare",
            text: "Auto Mobile Care"
        }, {
            id: "mobileCare",
            text: "Mobile Care"
        },
        {
            id: "autoMobileCare",
            text: "Auto Mobile Care"
        }, {
            id: "mobileCare",
            text: "Mobile Care"
        }
    
    ]
  return (
    <div className='w-[20vw] h-[100vh] absolute top-0 bg-white ' style={showSidebar ? {left:"0px"} : {left : "-20vw"}} >
        <div className='flex justify-between bg-[#232f3e] p-3 text-white' > 
            <div className='flex' >
                <PersonIcon />
                <h2 className='ml-2' >Hello UserName</h2>
            </div>
            <div onClick={handleCloseSidebar} >
                <CloseIcon  />
            </div>
         </div>
         <div className='flex justify-between items-start flex-col  p-5 min-h-[90vh]' >
                {
                    navOptions.map((opt)=>(
                        <button key={opt.id} className='bg-blue-300 w-full text-left p-3 rounded-md' >{opt.text}</button>
                    ))
                }
        </div>
    </div>
  )
}

export default Sidebar