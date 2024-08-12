import React from 'react'
// import './ChooseOptionNav.scss'
import MenuIcon from '@mui/icons-material/Menu';
import { useContext } from 'react';
import { SidebarContext } from '../../Utilities/Context/SidebarContext';
const ChooseOptionNav = () => {
    const {setShowSidebar , showSidebar} = useContext(SidebarContext)

    function handleSidebarShow(){
        setShowSidebar(true)
        console.log(showSidebar)
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
        }
    ]
    return (
        <div className='flex bg-[#232f3e] text-white p-3' >
            <div className='flex mr-5' onClick={handleSidebarShow} >
                <MenuIcon />
                <h2  >All</h2>
            </div>
            <div className='flex justify-between  w-[75%]' >
                {
                    navOptions.map((opt)=>(
                        <button key={opt.id} >{opt.text}</button>
                    ))
                }
            </div>
        </div>
    )
}

export default ChooseOptionNav