import React from 'react'
import { FaMeta } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Topbar = () => {
  return (
    <div className='bg-rabbit-red text-white'>
        <div className="container mx-auto flex justify-between items-center py-3 px-4">
            <div className='hidden md:flex flex items-center space-x-4'>
                <a href="#" className='hover:text-grey-300'>
                <FaMeta />
                </a>
                <a href="#" className='hover:text-grey-300'>
                <FaInstagram />
                </a>
                <a href="#" className='hover:text-grey-300'>
                <FaXTwitter />
                </a>
            </div>
            <div className="text-sm text-center flex-grow">
                <span>We Ship All over India Fast and Reliable</span>
            </div>
            <div className="text-sm hidden md:block">
                <a href="tel:+919648165493" className='hover:text-grey-300'>
                    +91 9648165493
                </a>
            </div>
        </div>
      
    </div>
  )
}

export default Topbar
