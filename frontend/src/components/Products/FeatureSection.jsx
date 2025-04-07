import React from 'react'
import { FaShoppingBag } from "react-icons/fa";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { HiOutlineCollection } from "react-icons/hi";
const FeatureSection = () => {
  return (
    <section className='py-16 px-4 bg-white'>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">

        {/* Feature 1 */}
        <div className="flex flex-col items-center">
            <div className="p-4 rounded-full mb-4">
            <FaShoppingBag className='text-xl' />
            </div>
            <h4 className="tracking-tighter mb-2"> FREE SHIPPING ALL OVER INDIA  </h4>
            <p className='text-gray-600 text-sm tracking-tighter'>On Order Of over 5000rs</p>
        </div>

   {/* Feature 2 */}

        <div className="flex flex-col items-center">
            <div className="p-4 rounded-full mb-4">
            <MdOutlineShoppingCartCheckout className='text-xl' />
            </div>
            <h4 className="tracking-tighter mb-2"> SECURE CHECKOUT  </h4>
            <p className='text-gray-600 text-sm tracking-tighter'>100% Secure Checkout Process</p>
        </div>

           {/* Feature 3 */}
           <div className="flex flex-col items-center">
            <div className="p-4 rounded-full mb-4">
            <HiOutlineCollection className='text-xl' />
            </div>
            <h4 className="tracking-tighter mb-2"> Collection </h4>
            <p className='text-gray-600 text-sm tracking-tighter'>New and trending collection</p>
        </div>
        </div>
    </section>
  )
}

export default FeatureSection
