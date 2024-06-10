'use client'
import React from 'react'
import { SIDENAV_ARRAY } from '../Constants/sideNav'
import { SideNavArray } from '../Types/sideNav'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '../../lib/tailwind-merge'
import { useSideNavContext } from '../Context/sideNavContext'

const SideNav = () => {
  const { isSideNavOpen } = useSideNavContext();
  return (
    isSideNavOpen && (
      <div className='fixed hidden md:flex flex-1 md:w-20 lg:w-52 h-screen border-r-2 border-r-[#ddd]'>
        <div className='flex flex-col items-center justify-start h-full w-full space-y-2 bg-[var(--background-grey-color)] mx-auto px-3'>
          <Link href="/" className='flex items-center justify-center w-full h-[50px] border-b-2 border-b-[#ddd]'>
            <span className='font-bold text-xl'>Logo</span>
          </Link>
          {SIDENAV_ARRAY.map((item, index) => (
            <NavItem key={index} item={item} />
          ))}
        </div>
      </div>
    )
  )
}

export default SideNav;

const NavItem = ({ item }: { item: SideNavArray }) => {
  const pathName = usePathname();

  return (
    <Link
      href={item.path}
      className=
      {cn(`flex flex-row space-x-4 w-full items-center rounded-lg mx-auto px-3 py-2 text-[#5F5E5B] hover:text-[#1E1E24] hover:bg-[#e4e4e7]`,
        { 'bg-[#e4e4e7] text-[#1E1E24]': pathName.startsWith(item.path) })}
    >
      {item.icon}
      <span className="hidden lg:block font-medium text-xl">{item.title}</span>
    </Link>
  )
}