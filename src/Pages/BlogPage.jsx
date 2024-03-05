import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';
import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../Components/Header';
import BlogDetails from '../Components/BlogDetails';
import Pagination from '../Components/Pagination';
import Spinner from '../Components/Spinner';


const BlogPage = () => {
    const newBaseUrl = "https://codehelp-apis.vercel.app/api/";
    const [blog, setBlog] = useState(null);
    const [relatedBlogs, setRelatedBlogs] = useState([]);
    const location = useLocation();
    const navigation = useNavigate();
    const {setLoading, loading} = useContext(AppContext);

    const blogId = location.pathname.split("/").at(-1);

    async function fetchRelatedBlogs() {
        setLoading(true);
        let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
        try{
            const res = await fetch(url);
            const data = await res.json();
            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlogs);
        }
        catch(error) {
            console.log("Error Loading");
            setBlog(null);
            setRelatedBlogs([]);
        }
        setLoading(false);
    }

    useEffect(() => {
        if(blogId){
            fetchRelatedBlogs();
        }
    }, [location.pathname]);

  return (
    <div className="w-full h-full flex flex-col items-center gap-x-1">
        <Header/>
        <div className='w-11/12  max-w-[640px] flex justify-start items-center gap-x-2 mt-[70px]'>
            <button className='rounded-md border-2 px-3 py-1' onClick={() => navigation(-1)}>
                Back
            </button>
        </div>
        {
            loading ? 
            (<Spinner/>) :
            blog ?
            (<div className='w-11/12 max-w-[640px] min-h-screen py-6 flex flex-col justify-center gap-y-7 mb-[10px]'>
                <BlogDetails post={blog}/>
                <h2 className=" font-bold text-2xl ">Related Blogs</h2>
                {
                    relatedBlogs.map((post) => (
                        <div key={post.id}>
                            <BlogDetails post={post}/>
                        </div>
                    ))
                }
            </div>) :
            (<div>No Blog Found</div>)
            
        }
        <Pagination/>
    </div>
  );
};

export default BlogPage;