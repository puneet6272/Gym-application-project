import React, { useState } from 'react'
import bars from './bars.png'
import { Link } from 'react-scroll'
function NavBar() {

    const [but, setbut] = useState(false)
    const [nabBut, setNavBut] = useState(true)
    console.log(nabBut)
    return (
        <div className='flex justify-between'>

            <img className=' h-12' src="images/logo.png" alt='logo' />



            <div className='flex  items-end'>

                <button onClick={() => setNavBut(!nabBut)}
                    className={nabBut === true ? 'sm:hidden' : 'sm:visible'}>
                    <div className=' mb-4 border h-14 w-12  bg-slate-700 rounded-md flex justify-center items-center'>
                        <img className='w-8 h-8 ' src={bars} alt="" />
                    </div>
                </button>
                <ul className={`z-50 absolute top-24 sm:top-0  flex flex-col sm:flex-row sm:right-[30rem] sm:bg-transparent list-none gap-8 bg-slate-800 p-8 text-white rounded-lg ${nabBut === true ? 'sm:visible' : 'sm:hidden'}`}>

                    <li onClick={() => setbut(false)} className=' cursor-pointer'>
                        <Link
                            to='/'
                            span={true}
                            smooth={true}>Home</Link>
                    </li>



                    <li onClick={() => setbut(false)} className=' cursor-pointer'>

                        <Link
                            to='programs'
                            span={true}
                            smooth={true}>Programs</Link>
                    </li>


                    <li onClick={() => setbut(false)} className=' cursor-pointer'>

                        <Link
                            to='Why_us'
                            span={true}
                            smooth={true}>Why us</Link>
                    </li>




                    <li onClick={() => setbut(false)} className=' cursor-pointer'>

                        <Link
                            to='plans'
                            span={true}
                            smooth={true}>Plans</Link>
                    </li>


                    <li onClick={() => setbut(false)} className=' cursor-pointer'>                        <Link
                        to='testimonals'
                        span={true}
                        smooth={true}>Testimonials</Link>
                    </li>
                </ul>


            </div>
        </div>
    )
}

export default NavBar
