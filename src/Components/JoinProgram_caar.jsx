import React from 'react'
import { FaArrowRight } from "react-icons/fa";


function JoinProgram_caar({ heading, img, details }) {


    return (
        <div className='flex text-white w-[40%] flex-col h-52 justify-between planCards p-4 bg-arun_gray mt-10'>
            <div className=' fill-white'>{img}</div>
            <div className='text-2xl font-bold'>{heading}</div>
            <div>{details}</div>
            <div >
                <button className=' relative '>join
                    <span  className=' absolute top-1 left-10'> <FaArrowRight /></span></button>
            </div>
        </div>
    )
}

export default JoinProgram_caar
