import React from 'react'
import male from '../../assets/malemodel.jpg'
import female from '../../assets/Femalemodel.jpg'
import { Link } from 'react-router-dom'
const GenderCollectionSection = () => {
  return (
    <section className=' py-16 px-4 lg:px-0'>
      <div className="container mx-auto flex flex-col md:flex-row gap-8">
        {/* Womens collection */}
        <div className="relative flex-1">
            <img src={female} alt="Womens Collection" className='w-full h-[700px] object-cover' />
            <div className="absolute bottom-8 left-8 bg-white bg-opacity-90 p-4">
                <h2 className="text-2xl font-bold text-gray-900 mb-3 ">Womens Collection</h2>
                <Link to='/collection/all?gender=Women' className='text-gray-900 underline'>Shop Now</Link>
            </div>
        </div>
        <div className="relative flex-1">
            <img src={male} alt="Womens Collection" className='w-full h-[700px] object-cover' />
            <div className="absolute bottom-8 left-8 bg-white bg-opacity-90 p-4">
                <h2 className="text-2xl font-bold text-gray-900 mb-3 "> Mens Collection</h2>
                <Link to='/collection/all?gender=Men' className='text-gray-900 underline'>Shop Now</Link>
            </div>
        </div>

      </div>
    </section>
  )
}

export default GenderCollectionSection
