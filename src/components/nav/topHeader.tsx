'use client'
import useScroll from "@/hooks/use-scroll";
import { cn } from "@/lib/tailwind-merge";
import { useSelectedLayoutSegment } from "next/navigation";

const TopHeader = () => {
  const scrolled = useScroll(5);
  const selectedLayout = useSelectedLayoutSegment();
  return (
    <div className={cn("sticky top-0 left-0 right-0 z-30 w-full transition-all",
      {
        'bg-[white]/75 backdrop-blur-lg': scrolled,
        'bg-[white]': selectedLayout,
      })
    }>
      <div className="flex h-[50px]">

      </div>

    </div>
  )
}

export default TopHeader;