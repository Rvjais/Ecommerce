import React from 'react'
import Topbar from '../Layout/Topbar'
import Navbar from './Navbar'

const Header = () => {
  return (
    <header className='border-b border-gray-400' >   
   {/* Topbar*/}
   <Topbar/>
   {/* Navbar*/}
   <Navbar/>
   {/* cart Drawer*/}
    </header>
  )
}

export default Header
