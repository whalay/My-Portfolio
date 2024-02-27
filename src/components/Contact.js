import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className=' w-full h-screen bg-[#0a192f] flex justify-center item-center p-4  '>
      <form method='POST' action="https://getform.io/f/789efd1d-e00b-4f58-9c57-9c3ec9da8ec5" className='flex flex-col max-w-[600px] w-full ' >
        <div className='py-10 mt-16'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
          <p className=' text-gray-300 py-4'>/ Submit the form below or shoot me an email - soliuy5@gmail.com </p>
        </div>

        <input className=' p-2 bg-[#ccd6f6]' type="text" placeholder='Name' name='name' />
        <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
      <textarea className='bg-[#ccd6f6] p-2 ' name="mesage"  rows="10" placeholder='Message'></textarea>
      <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 mt-4 mx-auto items-center'>Let's Collaborate</button>
      </form>
    </div>
  )
}

export default Contact
