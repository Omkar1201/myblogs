import React, { useContext, useEffect } from 'react'
import { AppContext } from '../context/Appcontext'
import AppContextProvider from '../context/Appcontext';
import Spinner from './Spinner';
import './Blogs.css'
export default function Blogs() {
    const { spinner,blog, fetchpage } = useContext(AppContext);
    useEffect(() => {
        fetchpage();
    }, [])
    return (
        <div className='responsive w-[40vw] p-2 m-auto text-left min-h-screen '>
            
            {spinner ? <Spinner/>:
                blog.map((post) => (
                    <div key={post.id} className='my-4'>
                        <p className='font-semibold text-[1.1rem]'>{post.title}</p>
                        <p>BY <span className=' italic text-sm'>{post.author} </span>on <span className='font-semibold'>{post.category}</span></p>
                        <p className='text-sm'>Posted on {post.date}</p>
                        <p className='mt-2'>{post.content}</p>
                        <div className=' flex text-[0.85rem] flex-wrap justify-between underline font-semibold text-blue-700'>

                            {
                                post.tags.map((tag, index) => (
                                    <div key={index} className=''>
                                        <p className=''>{`#${tag}`}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
