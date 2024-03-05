import React from 'react'
import {useLocation, useNavigate } from 'react-router-dom'
import Pagination from '../Components/Pagination';
import Blogs from '../Components/Blogs';
import Header from '../Components/Header';

const TagPage = () => {

    const navigation = useNavigate();
    const location = useLocation();
    const tag = location.pathname.split("/").at(-1);


  return (
    <div className="w-full h-full flex flex-col items-center gap-x-1">
        <Header/>
        <div className='w-11/12 max-w-[640px] flex items-center gap-x-2 mt-[70px]'>
            <button className='rounded-md border-2 px-3 py-1'
            onClick={() => navigation(-1)}
            >
                Back
            </button>
            <h2 className='text-md font-bold '>
                Blogs Tagged <span className="underline text-blue-700 cursor-pointer">#{tag}</span>
            </h2>
        </div>
        <Blogs/>
        <Pagination/>
    </div>
  )
}

export default TagPage