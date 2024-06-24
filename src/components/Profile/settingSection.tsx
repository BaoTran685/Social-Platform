'use client'
import { signIn, signOut, useSession } from "next-auth/react"
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/tailwind-merge";
import { motion } from "framer-motion";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";

const SettingSection = () => {
  const menuRef = useRef<HTMLDivElement>(null);
  const [settingOpen, setSettingOpen] = useState<boolean>(false);

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
  const { data: session } = useSession();
  return (
    <div className="flex flex-col items-center justify-end">
      <div className="relative" ref={menuRef}>
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
                open: { rotate: 180, color: '#EA580C' },
                closed: { rotate: 0, color: '#37352F' }
              }}
              transition={{ duration: 0.3 }}
            >
              <Cog6ToothIcon className="size-6" />
            </motion.div>
          </motion.button>
        </motion.div>
        <div className={cn("absolute top-[calc(100%+0.25rem)] right-0 bg-[white] rounded-lg box--shadow pointer-events-none opacity-0 -translate-y-6 transition-all ease-in-out duration-200 p-1.5 ",
          {
            'opacity-100 pointer-events-auto translate-y-0': settingOpen,
          }
        )}>
          <div className="flex flex-col whitespace-nowrap">
            <Link href='/profile/update'>
              <SettingItem text="Update Profile" onClick={() => { }} />
            </Link>
            <Link href='/post/createpost'>
              <SettingItem text="Create Post" onClick={() => { }} />
            </Link>
            {(session === null) ? (
              <SettingItem text="Log In" onClick={() => signIn()} />
            ) : (
              <SettingItem text="Log Out" onClick={() => signOut()} />
            )}
          </div>
        </div>

      </div>
    </div>
  )
}
export default SettingSection;

const SettingItem = ({ text, onClick }: { text: string, onClick: Function }) => {
  return (
    <div className={cn("flex flex-row items-center justify-center rounded-lg px-3 py-1 hover:text-[black] hover:bg-[#EDECE9] cursor-pointer",
      {
        'hover:bg-red-600 hover:text-white': text === 'Log Out',
        'hover:bg-[#21A179] hover:text-white': text === 'Log In'
      }
    )} onClick={() => onClick()}>
      <span className="flex text--sub--small">{text}</span>
    </div>
  )
}