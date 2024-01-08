import React from 'react'
import JoinProgram_caar from './JoinProgram_caar'
import { programsData } from '../data/programsData'
import img1 from '../assets/image1.png'
import img2 from '../assets/image2.png'
import img3 from '../assets/image3.png'
import img4 from '../assets/image4.png'
import tic from '../assets/tick.png'
import nike from '../assets/nike.png'
import nb from '../assets/nb.png'
import adidas from '../assets/adidas.png'


function Programs() {

    return (
        <div id='programs'>

            {/* text section */}
            <section>
                <div className='flex justify-center'>
                    <div className='italic flex justify-around text-5xl text-white font-bold px-16 w-[89%]'>
                        <span className='textStroke'>EXPLORE OUR </span>
                        <span>PROGRAMS</span>
                        <span className='textStroke'>TO SHAPE YOU</span>
                    </div>
                </div>
            </section>

            {/* Join box section */}
            <section className='flex justify-center'>
                <div className='flex justify-between gap-8 px-8'>
                    {
                        programsData.map((Programe_data) => (
                            <JoinProgram_caar heading={Programe_data.heading}
                                details={Programe_data.details
                                }
                                img={Programe_data.image}
                                key={Programe_data.id} />
                        ))
                    }
                </div>
            </section>


            {/* why chose us */}
            <section className=' Why_Chose_us mt-24 ' id='Why_us'>

                <div className='img flex-1 grid grid-cols-3 gap-4 row-auto'>
                    <img src={img1} alt='Gym people'/>
                    <img src={img2} alt='Gym people'/>
                    <img src={img3} alt='Gym people'/>
                    <img src={img4} alt='Gym people'/>
                </div>

                <div className=' flex-1  text-white font-bold'>
                    <p className='  uppercase text-arun_orange'>Some reason</p>
                    <p className=' my-8 uppercase text-5xl italic '><span className='textStroke '>why </span> <span>chose us ?</span></p>

                    <div>
                        <p className='flex gap-6 items-center my-4'><img className=' w-8' src={tic} alt="" />  OVER 140+ EXPERT COACHS</p>
                        <p className='flex gap-6 items-center my-4'><img className=' w-8' src={tic} alt="" /> TRAIN SAMASTER AND FASTER THAN BEFORE</p>
                        <p className='flex gap-6 items-center my-4'><img className=' w-8' src={tic} alt="" /> 1 FREE PROGRAME FOR NEW MEMBER </p>
                        <p className='flex gap-6 items-center my-4'><img className=' w-8' src={tic} alt="" /> RELIABLE</p>
                    </div>

                    <p className=' text-arun_gray'>OUR PAERTNER</p>

                    <div className=' w-8 flex gap-4'>
                        <img src={nb} alt="" />
                        <img src={adidas} alt="" />
                        <img src={nike} alt="" />

                    </div>

                </div>
            </section>


        </div>
    )
}

export default (Programs)
