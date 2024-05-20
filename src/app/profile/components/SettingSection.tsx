'use client'
import { signIn, signOut, useSession } from "next-auth/react"
import { Cor } from "../../components/Icon/Icons"
import { useState } from "react";

const SettingSection = () => {
  const [settingOpen, setSettingOpen] = useState(false);
  const handleClick = () => {
    setSettingOpen(!settingOpen);
  }
  const {data: session} = useSession();
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative">
        <div onClick={() => handleClick()}>
          <Cor />
        </div>
        {settingOpen === true && (
          <div className="absolute top-[calc(100%_+_.5rem)] right-0 bg-[white] rounded-lg box--shadow p-2">
            <div className="flex flex-col whitespace-nowrap">
              <SettingItem text="Update Profile" onClick={() => console.log('Update Profile')} />
              <SettingItem text="Create Post" onClick={() => console.log('Create Post')} />
              {(session === null) ? (
                <SettingItem text="Log In" onClick={() => signIn()} />
              ) : (
                <SettingItem text="Log Out" onClick={() => signOut()} />
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
export default SettingSection;

const SettingItem = ({ text, onClick }: { text: string, onClick: Function }) => {
  return (
    <div className="flex flex-row items-center justify-center rounded-lg px-3 py-1 hover:text-[black] hover:bg-[#EDECE9] cursor-pointer" onClick={() => onClick()}>
      <span className="flex">{text}</span>
    </div>
  )
}