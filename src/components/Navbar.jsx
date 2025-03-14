import React from 'react';
import WidthWrapper from './WidthWrapper';
import { Button } from './ui/button';
import Link from 'next/link';

const Navbar = () => {
  return (
    <>
      <header className='w-full py-2 shadow-sm'>
        <WidthWrapper>
          <nav className='w-full flex justify-between'>
            <Link href={'/'}>
              <div className="text-2xl font-bold text-blue-500">Logo</div>
            </Link>
            <div className='flex items-center gap-2'>
              {/* <Link href={'/'}>Pricing</Link>
              <Button variant='outline'>Register</Button> */}
              <Link href={'https://pmny.in/PAYUMN/AItlQmmJXNZp'} className='hover:underline'>Donate</Link>
            </div>
          </nav>
        </WidthWrapper>
      </header>
    </>
  )
}

export default Navbar;