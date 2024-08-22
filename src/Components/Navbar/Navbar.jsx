import React from 'react'
// import './Navbar.sass'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div className='flex justify-around items-center bg-[#121921] text-white p-3 ' >
            <h1 className='text-xl' >Ecommerce App</h1>
            <div className='w-2/5 bg-yellow-700 flex justify-between items-center rounded-md' >
                <input type="text" name="" id="" className='w-[95%] p-2 text-xl rounded-md text-black' />
                <SearchIcon className='scale-150 ml-2  h-[100%] mr-2' />
            </div>
            <div className='flex  justify-between w-1/5 text-xl' >
                <h2>User Name</h2>
                <Link to="/login">
                    <button>Login / Sign Up</button>
                </Link>
                <ShoppingCartIcon />
            </div>

        </div>
    )
}

export default Navbar