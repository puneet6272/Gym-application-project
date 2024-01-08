import React from 'react'
import white from '../assets/whiteTick.png'
import { plansData } from '../data/plansData'
import rigght_Arrow from '../assets/rightArrow.png'

function Prizing() {

    // console.log(plansData.icon)

    return (


        <div id='plans'>

            <div className='text-5xl text-white font-bold flex justify-center'>
                <span className=' textStroke'>READY TO START &#160; </span>
                <span >YOUR JOURNEY  &#160;</span>
                <span className=' textStroke'> NOW WITHUS</span>
            </div>


            <div className='flex px-72 justify-between h-[32rem] items-center mt-12'>
                {
                    plansData.map((item) => (


                        <div className={`w-72 p-6 shadow-2xl h-[26rem] text-white bg-arun_gray ${item.width}`} style={{ background: item.bg }}>

                            <div className='fill-white '>
                                {item.icon}
                            </div>
                            <div className=' font-bold'>{item.name}</div>

                            <p className='text-5xl font-bold'>$ {item.price}
                            </p>
                            <div className='gap-4 mt-4'>
                                {item.features.map((det) => (

                                    <div className=' my-4 flex gap-4' >
                                        <div className='flex items-center'>
                                            <img className='w-6' src={white} alt="" />
                                        </div>
                                        {det}
                                    </div>
                                ))}

                            </div>
                            <div className='flex items-center gap-4'>See all benifits
                                <img className='w-4 h-4 ' src={rigght_Arrow} alt='Right' /></div>

                            <div className='flex justify-center'>
                                <button className=' bg-white text-black px-20 py-2 font-bold mt-4'>Join now</button>
                            </div>

                        </div>


                    ))
                }
            </div>

        </div>
    )
}

export default Prizing
