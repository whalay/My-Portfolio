import React from 'react'
import aws from '../assets/aws.png';
import css from '../assets/css.png';
import firebase from '../assets/firebase.png';
import github from '../assets/github.png';
import html from '../assets/html.png';
import javascript from '../assets/javascript.png';
import react from '../assets/react.png';
import node from '../assets/node.png';



const Skills = () => {
  return (
    <div name='skills' className=' w-full h-screen bg-[#0a192f] text-gray-300'>
      {/* container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full pt-16'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
          <p className='py-2'>//These are the technology i have learnt so far</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gaps-4 text-center py-8'>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration--500 mt-4'>
            <img className='w-20 mx-auto' src={html} alt="" />
            <p className='my-4'>HTML</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration--500 mt-4'>
            <img className='w-20 mx-auto' src={react} alt="" />
            <p className='my-4'>REACT</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration--500 mt-4'>
            <img className='w-20 mx-auto' src={javascript} alt="" />
            <p className='my-4'>JAVASCRIPT</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration--500 mt-4'>
            <img className='w-20 mx-auto' src={css} alt="" />
            <p className='my-4'>CSS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration--500 mt-4'>
            <img className='w-20 mx-auto' src={github} alt="" />
            <p className='my-4'>GITHUB</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration--500 mt-4'>
            <img className='w-20 mx-auto' src={node} alt="" />
            <p className='my-4'>NODE</p>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Skills