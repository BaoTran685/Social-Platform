'use client'

import { DoubleArrow } from "../Icon/icons";
import { useSideNavContext } from "../Context/sideNavContext";

const TopHeader = () => {
  const {isSideNavOpen, setIsSideNavOpen} = useSideNavContext();

  const handleClick = () => {
    setIsSideNavOpen(!isSideNavOpen)
  }
  return (
    <div className="sticky top-0 left-0 right-0 z-30 w-full h-[50px] transition-all bg-[var(--background-grey-color)] backdrop-blur-sm border-b-2 border-b-[#ddd] px-3">
      <div className="flex flex-row h-full items-center">
        <div onClick={handleClick}>
          <DoubleArrow />
        </div>
      </div>
    </div>
  )
}

export default TopHeader;