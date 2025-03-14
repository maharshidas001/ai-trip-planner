import React from 'react';
import { cn } from '@/lib/utils';

const WidthWrapper = ({ className, children }) => {
  return (
    <>
      <div className={cn('h-full w-full px-2.5 md:px-20 max-w-screen-xl mx-auto', className)}>
        {children}
      </div>
    </>
  )
}

export default WidthWrapper;