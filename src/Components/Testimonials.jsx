import React, { useEffect, useRef, useState } from 'react'
import rightArrow from '../assets/rightArrow.png'
import leftArrow from '../assets/leftArrow.png'
import { testimonialsData } from '../data/testimonialsData'

function Testimonials() {
    let [slider, setSlider] = useState(0)
    console.log(slider)





    const Inc = () => {

        if (slider + 1 === testimonialsData.length) {
            setSlider(0)
            console.log("else")
        } else {
            setSlider(slider + 1)
            console.log("if")
        }
    }
    const Dec = () => {
        if (0 === slider) {
            setSlider(2)
        } else {
            setSlider(slider - 1)
        }
    }



    return (
        <div className='flex mx-10 font-bold text-white h-96 ' id='testimonals'>

            {/* text */}
            <div className=' w-3/5 flex flex-col justify-between'>
                <p className=' text-arun_orange'>TESTIMONOIALS</p>
                <div className=' text-5xl textStroke'>WHAT THEY</div>
                <div className='text-5xl'> SAY ABOUT US</div>
                <p className='font-normal text-wrap'>
                    {testimonialsData[slider].review}
                </p>

                <p className='font-normal'>
                    <span className=' text-arun_orange '> {testimonialsData[slider].name}-</span><samp>{testimonialsData[slider].status}</samp>
                </p>

            </div>



            {/* images */}


            <div className=' w-2/5  flex items-center justify-center relative'>


                <div className='border-2 border-arun_orange h-72 w-60 relative'>
                    <div className=' bg-slate-800 w-full h-full  absolute top-5 left-5'>

                        <img className='absolute top-4 right-4 h-72 w-60 object-cover' src={testimonialsData[slider].image} alt="" />
                    </div>

                    {/* left-right arrow */}



                </div>

                <div className='flex absolute bottom-0 left-0 '>
                    <button onClick={Dec}>
                        <img className=' w-8 text-white' src={leftArrow} alt="" />
                    </button>

                    <button onClick={Inc}>
                        <img className='w-8 ml-2' src={rightArrow} alt="" />
                    </button>

                </div>

            </div>

        </div>
    )
}

export default Testimonials
