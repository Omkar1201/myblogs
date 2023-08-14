import React, { useContext } from 'react'
import { AppContext } from '../context/Appcontext'
import './Blogs.css'
export default function Pagenavigate() {
    const { page, totalpage, fetchpage, handlepage } = useContext(AppContext);
    return (
        <div className='border-black flex border px-2'>
            <div  className='responsive w-[40vw] m-auto justify-between py-4 flex'>
                <div className='mx-2 flex gap-4'>
                    {page > 1 &&
                        (<button className='border font-semibold px-4 rounded-sm border-black' onClick={() => handlepage(page - 1)}>Previous</button>)

                    }
                    {page < totalpage &&
                        (<button className='border font-semibold px-4 rounded-sm border-black' onClick={() => handlepage(page + 1)}>Next</button>)
                    }
                </div>
                <div className='font-semibold'>Page {page} of {totalpage}</div>
            </div>
        </div>
    )
}
