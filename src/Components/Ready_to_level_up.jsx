import React from 'react'

function Ready_to_level_up() {
    return (

        <div className=' flex justify-start px-8'>
            <div className=' text-5xl text-white font-bold flex  items-center'>

                <div>
                    <div className=' relative left-3 w-44 h-1 rounded-full bg-orange'></div>
                    <div className='mt-2'> <span className=' textStroke'><span> READY TO</span> </span> LEVEL UP</div>
                    <div className='mt-2'> <span>YOUR BODY</span><span className=' textStroke'>WITH US ?</span> </div>
                </div>

                <div className=' relative ml-20 font-normal text-lg shadow-xl'>
                    <input className='text-white w-80 h-16 px-4 bg-gray-700' type="email" id="email" name="email" placeholder='Enter your Email here ' />
                    <button className=' absolute left-56 top-2 border px-4 py-2 items-center text-white bg-arun_orange rounded-md'> Send</button>

                </div>
            </div>
        </div>
    )
}

export default Ready_to_level_up
