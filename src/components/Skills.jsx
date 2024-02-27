import React from 'react'


import css from '../assets/css.png';
import github from '../assets/github.png';
import html from '../assets/html.png';
import javascript from '../assets/javascript.png';
import react from '../assets/react.png';
import node from '../assets/node.png';
import ubuntu from '../assets/ubuntu.svg';
import tailwind from '../assets/tailwindcss.svg';
import flask from '../assets/flask.jpeg';
import python from '../assets/python.png';





const Skill = [{
  id: 1,
  name: 'HTML',
  image: html,
},
{
  id: 2,
  name: 'CSS',
  image: css,
},
{
  id: 3,
  name: 'JAVASCRIPT',
  image: javascript,
},
{
  id: 4,
  name: 'REACT',
  image: react,
},
{
  id: 5,
  name: 'NODE',
  image: node,
},
{
  id: 6,
  name: 'GITHUB',
  image: github,
},
{
    id: 7,
    name: 'TAILWINDCSS',
    image: tailwind,
  },
  {
    id: 8,
    name: 'PYTHON',
    image: python,
  },
  {
    id: 9,
    name: 'FLASK',
    image: flask,
  },
  {
    id: 10,
    name: 'UBUNTU',
    image: ubuntu,
  },];



const Skills = () => {


  return (
    <div name='skills' className=' w-full h-screen bg-[#0a192f] text-gray-300'>
      {/* container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full pt-16'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
          <p className='py-2'>/These are the technology i have learnt so far</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gaps-4 text-center py-8'>
          {Skill.map((ski, i) => {
            return (
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration--500 mt-4'>
                <img className='w-20 mx-auto' src={ski.image} alt="" />
                <p className='my-4'>{ski.name}</p>

              </div>

            )
          })}

        </div>



      </div>
    </div>

  );
}

export default Skills;