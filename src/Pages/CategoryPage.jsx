import React from 'react'
import {useLocation, useNavigate } from 'react-router-dom'
import Header from '../Components/Header';
import Pagination from '../Components/Pagination';
import Blogs from '../Components/Blogs';

const CategoryPage = () => {
    const navigation = useNavigate();
    const location = useLocation();
    const category = location.pathname.split("/").at(-1);
  return (
    <div className="w-full h-full flex flex-col items-center gap-x-1">
        <Header/>
        <div className='w-11/12 max-w-[640px] flex items-center  gap-x-2 mt-[70px]'>
            <button className='rounded-md border-2 px-4 py-1' onClick={() => navigation(-1)}>
                Back
            </button>
            <h2 className='text-md font-bold '>
                Blogs on <span>{category}</span>
            </h2>
        </div>
        <Blogs/>
        <Pagination/>
    </div>
  );
};

export default CategoryPage;