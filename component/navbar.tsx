import React from 'react'
import Link from 'next/link'

const Navbar:React.FC = () => {
  return (
    <div className='container mx-auto px-10 py-5 fixed border-b border-gray-200'>
        <div className='flex justify-between'>
            <div className='text-xl font-bold hover:text-blue-500'>
                <Link href='/'>Holdup</Link>
            </div>
            <nav className='flex space-x-4 items-center'>
                <Link href='/about' className='font-bold hover:text-blue-500'>About</Link>
                <Link href='/service' className='font-bold hover:text-blue-500'>Services</Link>
            </nav>
        </div>
    </div>
  )
}

export default Navbar