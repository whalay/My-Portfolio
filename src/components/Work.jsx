import React from 'react'

import Homestart from '../assets/Homestart.png';
import cryptoapp from '../assets/cryptoapp.png';
import ip from '../assets/ip.png';
import coin from '../assets/coin.png';
import admin from '../assets/admin.png';
import rest from '../assets/rest.png';



const workList = [
    {
        name: 'Admin Dashboard',
        image: admin,
        Demo:'https://admin-dashboard-fawn-tau.vercel.app',
        code: 'https://github.com/whalay/admin-dashboard'
    },
    {
        name: 'Coin Control',
        image: coin,
        Demo:'https://coin-control.vercel.app',
        code: 'https://github.com/whalay/CoinControl'
    },
    {
        name: 'Rest Countries',
        image: rest,
        Demo:'https://rest-countries-bice.vercel.app/',
        code: 'https://github.com/whalay/rest_countries'
    },
    {
        name: 'Homestart Landing Page',
        image: Homestart,
        Demo:'https://whalay-homestart.netlify.app',
        code: 'https://github.com/whalay/React-Portfolio'
    },
    {
        name: 'Crappo Landing Page',
        image: cryptoapp,
        Demo:'https://whalay-cryptoapp.netlify.app/',
        code: 'https://github.com/whalay/CrappoApp-Landing-page'
    },
    {
        name: 'IP Address Finder',
        image: ip,
        Demo:'https://whalay-ip-address-finder.netlify.app/',
        code: 'https://github.com/whalay/IP-Address-Finder'
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
                                        <a href={list.Demo}>
                                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white  text-gray-700 font-bold text-lg'>Demo</button>
                                        </a>
                                        <a href={list.code}>
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