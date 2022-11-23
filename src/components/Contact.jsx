import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
      <form method='POST' action="https://getform.io/f/9ed5ef20-9dfc-49e0-a5c9-b7668ab26835" className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-[#129E57] text-gray-300'>Contact</p>
          <p className='text-gray-300 py-4'>Submit the form below or shoot me an email - tiagodpv@gmail.com</p>
        </div>
        <input className='bg-[#ccd6f6] rounded-md p-2 ' type="text" placeholder='Name' name='name'/>
        <input className='my-4 p-2 bg-[#ccd6f6] rounded-md' type="email" placeholder='Email' name='email'/>
        <textarea className='bg-[#ccd6f6] p-2 rounded-md'  name='message' rows="10" placeholder='Message'></textarea>
        <button className='text-white border-2 hover:bg-[#129E57] hover:border-[#129E57] px-4 py-3 my-8 mx-auto flex items-center rounded-md'>Let's Colaborate</button>
        
      </form>
    </div>
  )
}

export default Contact