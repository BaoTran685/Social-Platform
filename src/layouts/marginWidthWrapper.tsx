'use client'
import { useSideNavContext } from '@/components/Context/sideNavContext';
import { ReactNode } from 'react';


export default function MarginWidthWrapper({
  children,
}: {
  children: ReactNode;
}) {
  const {isSideNavOpen} = useSideNavContext();
  return (
    isSideNavOpen ? (
      <div className="flex flex-col md:ml-20 lg:ml-52 min-h-screen">
        {children}
      </div>
    ) : (
      <div className='flex flex-col min-h-screen'>
        {children}
      </div>
    )
  );
}