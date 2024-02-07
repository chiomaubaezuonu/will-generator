import Image from 'next/image'
import React from 'react'
import logo from './images/logo.png'

const Home = () => {
  return (
    <div>
      <nav className='flex justify-between'>
        <div>
          <Image src={logo} alt='logo' />
        </div>
        <div>
          <ul className='flex bg-green-500 p-4'>
            <li className='pr-2'>FAQs</li>
            <li className='pr-2'>About Us</li>
            <li className='pr-2'>About Us</li>
            <li className='pr-2'>GenerateWill</li>
            <li className='pr-2'>Home</li>
          </ul>
        </div>
      </nav>
      <div></div>
    </div>
  )
}

export default Home