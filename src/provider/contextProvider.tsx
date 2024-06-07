'use client'
import { SideNavContext } from '@/components/Context/sideNavContext';
import { ReactNode, useState } from 'react';



export default function ContextProvider({ children }: { children: ReactNode }) {
  const [isSideNavOpen, setIsSideNavOpen] = useState(true);

  return (
    <SideNavContext.Provider value={{ isSideNavOpen, setIsSideNavOpen }}>
      {children}
    </SideNavContext.Provider>
  )
}