'use client'
import React, { ReactNode } from 'react';
import { DoubleArrow } from "../Icon/icons";
import { useSideNavContext } from "../Context/sideNavContext";
import SearchBar from '../Search/searchBar';
import { useSearchContext } from '../Context/searchContext';

const TopHeader = () => {
  const { isSearchBarVisible } = useSearchContext();
  
  const { isSideNavOpen, setIsSideNavOpen } = useSideNavContext();
  const handleClick = () => {
    setIsSideNavOpen(!isSideNavOpen)
  }
  return (
    <div className="sticky top-0 left-0 right-0 z-30 w-full h-[50px] transition-all bg-[var(--background-grey-color)] backdrop-blur-sm border-b-2 border-b-[#ddd] px-3">
      <div className="flex flex-row h-full items-center">
        <div onClick={handleClick}>
          <DoubleArrow />
        </div>
      <div className="flex justify-center w-full ">{isSearchBarVisible && <SearchBar/>}</div>
      </div>
    </div>
  )
}

export default TopHeader;