import React, { useState } from 'react'
import NavBar from './Hero_Sub_Component/NavBar'
import hero_image from '../assets/hero_image.png'
import hero_image_black from '../assets/hero_image_back.png'
import Heart from '../assets/heart.png'
import Calories from '../assets/calories.png'
import NumberCounterss from 'number-counter'

function Hero() {




    const [toggleClose, setToggleClose] = useState('Icon')

    return (
        <div className=' flex justify-between' id='/'>

            <section className='left basis-3/4 p-8 pt-6 flex flex-col gap-8'>
                <NavBar />
                <div className='effect relative top-8 right'></div>


                <div className=' mt-16 bg-gray-700 rounded-3xl px-5 py-4 w-fit uppercase text-white relative flex items-center justify-start'>
                    <div className=' absolute bg-arun_orange border w-20 rounded-3xl h-5/6 left-3  z-0'></div>
                    <span className=' z-10'>THE BEST FITNESS CLUB IN THE TOWN
                    </span>
                </div>


                {/* Hero Text */}
                <div className='flex flex-col gap-6 text-8xl text-white font-bold'>
                    <div>
                        <span className={`textStroke`}>SHAPE </span>
                        <span>YOUR</span>
                    </div>
                    <div>
                        <span>IDEAL </span>
                        <span>BODY</span>
                    </div>

                    <span className=' font-medium tracking-widest	text-sm w-5/6	'>In here we will help you to shape and build your ideal body and live up your life to fullest</span>
                </div>

                {/* number Figurs */}
                <div className=' flex justify-between'>
                    <div className=' text-md flex justify-between w-2/4 text-white'>
                        <div>
                            <span className='text-4xl'><NumberCounterss end = {140} start = {0} delay={'3'} preFix = "+" /> </span><br />
                            <span>EXPERT COACHES</span>
                        </div>

                        <div>
                            <span className='text-4xl'><NumberCounterss end = {978} start = {0} delay={'4'} preFix = "+" /></span><br />
                            <span>MEMBERS JOINED</span>
                        </div>
                        <div>
                            <span className='text-4xl'><NumberCounterss end = {50} start = {0} delay={'2'} preFix = "+" /></span><br />
                            <span>FITNESS PROGRAMS
                            </span>
                        </div>
                    </div>
                </div>


                {/* Get Start Buttons */}
                <div className='flex gap-4'>
                    <button className='px-6 py-2 bg-arun_orange text-white font-bold'>Get Started</button >
                    <button className='border-2 border-arun_orange px-6 py-2 text-white font-bold'>Learn More</button>
                </div>

            </section>

            <section className="basis-1/4 relative bg-arun_orange z-50">

                <button className=' absolute right-12 top-8 text-black bg-white  px-2 py-2 font-bold'>Join Now</button>

                <div className=' flex flex-col gap-1 bg-dark_Gray w-fit items-start rounded-lg  absolute right-8 top-28 p-6'>
                    <img className='w-8' src={Heart} />
                    <span className=' text-arun_gray' >Heart rate</span>
                    <span className=' text-white text-xl'> 116 bpm</span>
                </div>

                <img className=' absolute top-36 right-36 w-[23rem] z-10' src={hero_image} alt="" srcset="" />
                <img className='absolute w-[15rem] right-80 top-16' src={hero_image_black} alt="" srcset="" />

                <div className='flex gap-8 p-4 w-44 absolute bg-caloryCard rounded-md top-[30rem] right-[28rem]  z-50'>
                    <img className='w-12' src={Calories} alt="" srcset="" />
                    <div className='flex flex-col justify-between'>
                        <span className=' text-arun_gray'>Calories Burned</span>
                        <span className='text-white text-2xl'>345  kcal</span>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default Hero







// <div className='li shadow-xl rounded-md bg-gray-500 h-14 w-14 '>
// {/* <MenuButton /> */}
// <div className='MenuBUtton md:hidden'>
//     <div id="icon" className={`${toggleClose} md:hidden`} onClick={() => setToggleClose(toggleClose === 'Icon' ? 'Icon open' : 'Icon')
//     }>
//         <span />
//         <span />
//         <span />
//     </div>
// </div>
// </div>