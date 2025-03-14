import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';

const Hero = () => {
  return (
    <>
      <div className='w-full text-center px-12'>
        <h1 className='lg:text-8xl font-bold mt-16 text-3xl md:text-5xl'><span className='text-teal-400 underline'>Plan your trip</span> with <span className='text-blue-500 underline'>AI</span> in seconds.</h1>
        <Link href={'/create-trip'}>
          <Button variant='default' className='mt-6'>Create Trip</Button>
        </Link>
      </div >
    </>
  )
}

export default Hero;