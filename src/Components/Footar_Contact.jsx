import React from 'react'
import logo from '../assets/logo.png'
import gitHub from '../assets/github.png'
import linkdin from '../assets/linkedin.png'
import instagrame from '../assets/instagram.png'
import { Link } from 'react-scroll'

function Footar_Contact() {


console.log(2 +2 )

    return (
        <div className=' relative'>
            <hr />

            <div className='flex flex-col items-center my-4 ' >
                <div className=' text-white  flex justify-center gap-4 my-12  w-full '>


                    <a className=' w-8 mx-8' href="https://www.instagram.com/" target="_blank" >

                        <img className=' relative left-4' src={instagrame} alt="" />
                        Instagram 
                    </a>

                    <a className=' w-8 mx-8 ' href="https://github.com/dashboard" target="_blank" >
                        <img className=' relative left-2' src={gitHub} alt="" />
                        Github
                    </a>

                    <a className=' w-8 mx-6 ' href="https://www.linkedin.com/feed/" target="_blank" >                    <img className=' relative left-2' src={linkdin} alt="" />Linkdin
                    </a>


                </div>

                <div className='relative w-full flex justify-center cursor-pointer'>
                    <Link
                        to='/'
                        span={true}
                        smooth={true}><img className='flex justify-center w-52' src={logo} alt="" /></Link>


                </div>
                <div className='effect'></div>



            </div>


        </div>
    )
}

export default Footar_Contact
