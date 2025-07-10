import React from 'react'
import { Link } from 'react-router-dom'
import { FaMeta } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
const Footer = () => {
  return (
 <footer className='border-t py-12'>
<div className="container mx-auto grid grid-cols-1 md:grid-cols-4 ga8 px-4 lg:px-0">
<div className="ml-10 mr-10">
    <h3 className='text-lg text-gray-800 mb-4'>
        NewsLetter
    </h3>
    <p className='text-gray mb-4'>
        Be the first to hear about new product,exclusive events, and online offers.  
    </p>
    <p className='font-medium text-sm text-gray-600 mb-6'>
        Sign Up and start to Shop
    </p>
    {/* newsletter */}
    <form action="" className='flex '>
        <input type="email" placeholder='Enter your Email' className='p-3 w-full text-sm border-t border-l border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all ' />
        <button type='submit' className='bg-black text-white px-6 text-sm rounded-r-md hover:bg-gray-800 transition-all'>
            Subscribe
        </button>
    </form>
</div>
{/* Shop links */}
<div className='ml-10 mr-10'>
    <h3 className="text-lg text-gray-800 mb-4">Shop</h3>
    <ul className="space-y-2 text-gray-600">
        <li>
            <Link to='#' className='hover:text-gray-800 transition-colors'>
            Men's-topwear
            </Link>
        </li>
        <li>
            <Link to='#' className='hover:text-gray-800 transition-colors'>
            Women's topwear
            </Link>
        </li>
        <li>
            <Link to='#' className='hover:text-gray-800 transition-colors'>
            Men's Bottomwear
            </Link>
        </li>
        <li>
            <Link to='#' className='hover:text-gray-800 transition-colors'>
            Women's topwear
            </Link>
        </li>
    </ul>
</div>
{/* Support-Link */}
<div className='ml-10 mr-10'>
    <h3 className="text-lg text-gray-800 mb-4">Support</h3>
    <ul className="space-y-2 text-gray-600">
        <li>
            <Link to='#' className='hover:text-gray-800 transition-colors'>
           Contact us
            </Link>
        </li>
        <li>
            <Link to='#' className='hover:text-gray-800 transition-colors'>
           FAQ's
            </Link>
        </li>
        <li>
            <Link to='#' className='hover:text-gray-800 transition-colors'>
            About Us
            </Link>
        </li>
        <li>
            <Link to='#' className='hover:text-gray-800 transition-colors'>
           Feature
            </Link>
        </li>
    </ul>
</div>
{/* Follow Us */}
<div className="ml-10 mr-10">
    <h3 className='text-lg text-gray-800 mb-4'>Follow Us</h3>
    <div className="flex items-center space-x-4 mb-6">
        <a href="https://www.facebook.com" target='_blank' rel='noopener noreferrer'>
        <FaMeta className='h-5 w-5' />
        </a>
        <a href="https://www.instagram.com" target='_blank' rel='noopener noreferrer'>
        <FaInstagram className='h-5 w-5' />
        </a>
        <a href="https://www.facebook.com" target='_blank' rel='noopener noreferrer'>
        <FaWhatsapp className='h-5 w-5' />
        </a>
    </div>
    <p className="text-gray-500">Call Us</p>
    <p>
    <FiPhone className='h-5 w-5 inline-block mr-2' />
    +919648165493
    </p>
</div>
</div>
{/* Footer bottom */}
<div className='container mx-auto mt-12 px-4 lg:px-0 border-t border-gray-200 pt-6'>
    <p className='text-gray-500 text-sm tracking-tighter text-center'>
    © 2025, All Right Reserved
    </p>
</div>
 </footer>
  )
}

export default Footer
