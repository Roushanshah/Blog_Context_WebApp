import React from 'react'
import { AppContext } from '../Context/AppContext'
import Spinner from './Spinner';
import { useContext } from 'react';
import BlogDetails from './BlogDetails';

const Blogs = () => {

    //consume
    const {posts, loading} = useContext(AppContext);

  return (
    <div className='w-11/12 max-w-[650px] py-8 flex flex-col justify-center items-center gap-y-7 mt-[40px] mb-[40px]'>
        {
            loading ? 

            (<Spinner/>) : 

            (
                posts.length === 0 ? 
                (
                    <div className="min-h-[80vh] w-full flex justify-center items-center">
                        <p className="text-center font-bold text-3xl">No Post Found</p>
                    </div>
                ) : 

                (posts.map((post) => (
                    <BlogDetails key={post.id} post={post}/>
                )))
            )
        }
    </div>
  )
}

export default Blogs