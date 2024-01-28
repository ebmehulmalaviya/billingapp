import React from 'react';
import blogimg from  '../assets/blog1.jpeg'
import { AiOutlineArrowRight } from "react-icons/ai";
const Blog = () => {
    const blogs = [
        { id: 1, title: 'Creating Strimlind Safaguarding Process With OneRen', img: "src/assets/blog1.jpeg" },
        { id: 2, title: 'Creating Strimlind Safaguarding Process With OneRen', img: "src/assets/blog2.jpeg" },
        { id: 3, title: 'Creating Strimlind Safaguarding Process With OneRen', img: "src/assets/blog3.jpeg" }
    ]
    return (
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto md:my-12 pt-24' >
            <div className='text-center md:w-1/2 mx-auto'>
                <h2 className='md:text-4xl text-3xl text-gray-600 font-semibold mb-4'>Caring is the new mareting</h2>
                <p className='text-sm text-gray-600 mb-8 md:w-3/4 mx-auto'>The  Please allow ads and let sponsors fund your surfing.
                    Thank you! We use ads to keep our content free for you.
                    Please allow ads and let sponsors fund your surfing.
                    Thank you!</p>
            </div>
            {/*  all blogs */}
            <div className='md:py-10 pb-6 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between'>
                {
                    blogs.map(blog => <div key={blog.id} className='mx-auto relative mb-12 cursor-pointer '>
                        <img src={blogimg} alt='' className='w-96 h-72 hover:scale-95 transition-all duration-300 rounded-md shadow-md border' />
                        <div className='h-36 text-center px-4 py-8 bg-white shadow-lg rounded-md md:w-3/4 mx-auto absolute left-0 right-0 -bottom-12'>
                            <h3 className='mb-3 text-gray-500 font-semibold'>{blog.title}</h3>
                            <a href="/" className='font-bold hover:text-gray-600 text-main-red '><span className='flex items-center justify-center'>Readmore &nbsp; <AiOutlineArrowRight /></span></a>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Blog;