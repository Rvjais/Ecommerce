import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom';

const SortOption = () => {
  const [searchParams,setSearchParams] = useSearchParams();

  const handlesortChange = (e) =>
    {
    const sortBy = e.target.value
    searchParams.set("sortBy",sortBy )
    setSearchParams(searchParams)
  }
  return (
    <div className='mb-4 flex items-center justify-end'>
      <select onChange={handlesortChange}
      value={searchParams.get("sortBy") || ""}
      id="sort" className='border p-2 rounded-md focus:outline-none'>
           <option value="">Default</option>
           <option value="PriceAsc">Price:Low to High</option>
           <option value="PriceDesc">Price:High to Low</option>
           <option value="popularity">Popularity</option>
      </select>
      
    </div>
  )
}

export default SortOption
