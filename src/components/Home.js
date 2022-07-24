import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-[#0a192f]'>

            {/* container */}
            <div className='max-w-[1000px] mx-auto px-4 flex flex-col justify-center h-full'>
                <p className='text-pink-600 '>Hi, My name is</p>
                <h1 className='text-4xl font-bold sm:text-7xl text-gray-300'>Soliu Yusuf</h1>
                <h2 className='text-4xl sm:7xl font-bold text-gray-500'>I'm a Full Stack Developer
                </h2>
                <p className='text-gray-200 py-4 max-w-[700px]'>I'm a full-stack developer specilizing in building and occasionally
                    designing exceptional digital experiences. Currently I'm focused on
                    building responsive Full-tack web applications.
                </p>
                <div>
                    <button className='text-white  group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover: border-pink-600'>View Work
                    <span className='group-hover:rotate-90 duration-300'><HiArrowNarrowRight className='ml-1 '/></span> </button>
                </div>

            </div>
        </div>
    )
}

export default Home;