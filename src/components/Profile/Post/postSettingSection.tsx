'use client'

import { ThreeVerticalEllipsis } from "@/components/Icon/icons";
import { cn } from "@/lib/tailwind-merge";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const PostSettingSection = ({ postId }: { postId: string }) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const [settingOpen, setSettingOpen] = useState<boolean>(false)
  useEffect(() => {
    const handleClickOutsideMenu = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setSettingOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutsideMenu as EventListener);
    return () => {
      document.removeEventListener('mousedown', handleClickOutsideMenu as EventListener);
    }
  }, [menuRef])

  return (
    <div className="absolute top-0 right-0 mx-2 my-4">
      <div className="flex flex-col items-center relative" ref={menuRef}>
        <motion.div
          initial={false}
          animate={settingOpen ? 'open' : 'closed'}
          className='flex flex-col items-center justify-center'
        >
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={() => {
              setSettingOpen(!settingOpen)
            }}
          >
            <motion.div
              variants={{
                open: { rotate: 0, color: '#EA580C' },
                closed: { rotate: 0, color: '#37352F' }
              }}
              transition={{ duration: 0.3 }}
            >
              <ThreeVerticalEllipsis />
            </motion.div>
          </motion.button>
        </motion.div>
        <div className={cn("absolute top-[calc(100%+0.25rem)] right-0 bg-[#f4f4f5] rounded-lg box--shadow pointer-events-none opacity-0 transition-all -translate-y-6 ease-in-out duration-200 p-1.5 ",
          {
            'opacity-100 pointer-events-auto translate-y-0': settingOpen,
          }
        )}>
          <div className="flex flex-col whitespace-nowrap">
            <Link href={`/profile/editpost/${postId}`}>
              <SettingItem text="Edit Post" onClick={() => { }} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostSettingSection;

const SettingItem = ({ text, onClick }: { text: string, onClick: Function }) => {
  return (
    <div className={cn("flex flex-row items-center justify-center rounded-lg px-3 py-1 hover:text-[black] hover:bg-[#e4e4e7] cursor-pointer",
      {
        'hover:bg-red-600 hover:text-white': text === 'Delete',
      }
    )} onClick={() => onClick()}>
      <span className="flex text--sub--small">{text}</span>
    </div>
  )
}