'use client'

import React, { ReactNode } from 'react';
import { DoubleArrow } from "../Icon/icons";
import { useSideNavContext } from "../Context/sideNavContext";
import { motion } from "framer-motion";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";
import { cn } from "@/lib/tailwind-merge";
import { SIDENAV_ARRAY } from "../Constants/sideNav";
import { SideNavArray } from "../Types/sideNav";
import { usePathname } from "next/navigation";
import Link from "next/link";
import SearchBar from '../Search/searchBar';
import { useSearchContext } from '../Context/searchContext';

const TopHeader = () => {
  const { isSideNavOpen, setIsSideNavOpen } = useSideNavContext();
  const { isSearchBarVisible } = useSearchContext();

  return (
    <div className="sticky top-0 left-0 right-0 z-30 w-full h-[50px] transition-all bg-[var(--background-grey-color)] backdrop-blur-sm border-b-2 border-b-[#ddd] px-3">
      <div className="flex flex-row h-full items-center">
        <motion.div
          initial={isSideNavOpen}
          animate={isSideNavOpen ? 'open' : 'closed'}
          className='flex items-center justify-center'
        >
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={() => {
              setIsSideNavOpen(!isSideNavOpen)
            }}
          >
            <motion.div
              variants={{
                open: { rotate: 0, color: '#EA580C' },
                closed: { rotate: 180, color: '#37352F' }
              }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDoubleRightIcon className="size-6" />
            </motion.div>
          </motion.button>
        </motion.div>
        <div className={cn('flex md:hidden flex-row space-x-4 items-center justify-center w-full h-full pointer-events-none opacity-0 -translate-x-full transition-all ease-in-out duration-200',
          {
            'opacity-100 pointer-events-auto translate-x-0': isSideNavOpen
          }
        )}
        >
          {SIDENAV_ARRAY.map((item, index) => (
            <TopNavItem key={index} item={item} />
          ))}
        </div>
      <div className="flex justify-center w-full ">{isSearchBarVisible && <SearchBar/>}</div>
      </div>
    </div >
  )
}

export default TopHeader;


const TopNavItem = ({ item }: { item: SideNavArray }) => {
  const pathName = usePathname();

  return (
    <Link
      href={item.path}
      className=
      {(cn('flex w-fit items-center rounded-lg px-3 py-2 text-[#5F5E5B] hover:text-[#1E1E24] hover:bg-[#e4e4e7]',
        {
          'bg-[#e4e4e7] text-[#1E1E24]': pathName.startsWith(item.path)
        }
      ))}
    >
      {item.icon}
    </Link>
  )
}