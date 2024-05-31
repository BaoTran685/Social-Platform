'use client'
import React from 'react'
import { SIDENAV_ARRAY } from '../Constants/sideNav'
import { SideNavArray } from '../Types/sideNav'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '../../lib/tailwind-merge'

const SideNav = () => {
  return (
    <div className='hidden md:flex flex-1 md:w-24 h-screen fixed'>
      <div className='place-self-center flex flex-col items-center justify-center h-fit space-y-2 bg-[#e7e7e76b] rounded-md shadow-md ml-auto p-2'>
        {SIDENAV_ARRAY.map((item, index) => (
          <NavItem key={index} item={item} />
        ))}
      </div>
    </div>
  )
}

export default SideNav;

const NavItem = ({ item }: { item: SideNavArray }) => {
  const pathName = usePathname();

  return (
    <Link
      href={item.path}
      className=
      {cn(`flex flex-row space-x-4 items-center rounded-lg p-2 text-[#5F5E5B] hover:text-[black] hover:bg-[#EDECE9]`,
        { 'bg-[#EDECE9] text-black': item.path === pathName })}
    >
      {item.icon}

    </Link>
  )
}

{/* <div className='flex flex-col space-y-6 w-full'>
        <Link href="/" className='flex flex-row items-center justify-center w-full h-12 py-12'>
          <span className='font-bold text-xl'>Logo</span>
        </Link>
        <div className='flex flex-col space-y-2 px-4'>
          {SIDENAV_ARRAY.map((item, index) => (
            <NavItem key={index} item={item} />
          ))}
        </div>
      </div> */}