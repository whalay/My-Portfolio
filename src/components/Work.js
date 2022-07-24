import React from 'react'
import workImg from '../assets/workImg.jpeg';
import realestate from '../assets/realestate.jpg';
import Homestart from '../assets/Homestart.png';

const workList = [
    {
        name: 'React App',
        image: workImg,
    },
    {
        name: 'Homestart Landing Page',
        image: Homestart,
    },
];

const Work = () => {
    return (
        <div name='work' className='bg-[#0a192f] w-full  md:h-screen text-gray-300'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='py-8 mt-16 '>
                    <p className='text-4xl  font-bold inline border-b-4 text-gray-300 border-pink-600'>work</p>
                    <p className='py-6'>/Check out some of my recent work</p>
                </div>

                {/* container */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    {/* Grid Item */}

                    {workList.map((list) => {
                        return (
                            <div style={{ backgroundImage: `url(${list.image})` }} className='shadow-lg shadow-[#040c16]  group container rounded-md flex justify-center items-center mx-auto content-div'>
                                {/* hover  effect */}
                                <div className='opacity-0 group-hover:opacity-100'>
                                    <span className='text-2xl font-bold text-white tracking-wider'>
                                        {list.name}
                                    </span>
                                    <div className='pt-4 text-center'>
                                        <a href="/">
                                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white  text-gray-700 font-bold text-lg'>Demo</button>
                                        </a>
                                        <a href="/">
                                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                        </a>
                                    </div>
                                </div>

                            </div>

                        );
                    })}




                </div>

            </div>
        </div>

    )
}

export default Work