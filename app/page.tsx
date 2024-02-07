import Image from 'next/image'
import React from 'react'
import logo from './images/logo.png'
import { Button } from 'antd'
import Link from 'next/link'

const Home = () => {
  return (
    <div>
      <hr className='bg-red-800 text-red-800 w-full' />
      <nav className='flex justify-between px-24 py-4'>
        <div>
          <Image src={logo} alt='logo' className='w-[14rem]' />
        </div>
        <div>
          <ul className='flex'>
            <li className='py-2 px-4 text-[#777] text-base'><a href="/">Home</a></li>
            <li className='py-2 px-4 text-[#777] text-base'>About Us</li>
            <li className='py-2 px-4 text-[#777] text-base'><a href="/Faqs">FAQs</a></li>
            <li className='py-2 px-4 text-[#fff] text-base bg-blue-500'>GenerateWill</li>
            <li className='py-2 px-4 text-[#777] text-base'>About Us</li>
          </ul>
        </div>
      </nav>
      <div className='bg-[#2F323A] py-32 text-center'>
        <h1 className='text-5xl text-white font-medium'>Always the completely free way <br /> to make your will.</h1>
       <Link href='/getStarted'> <Button type='primary' className='bg-blue-500 mx-auto mt-8 px-14 text-lg text-center py-5'> GenerateWill </Button></Link>
      </div>
      <div className='bg-green-500'>
        <h3 className='text-center my-6 text-xl'>No account needed, no credit card - just 100% free! - Instant download (Word or PDF)</h3>
      </div>
    </div>
  )
}

export default Home