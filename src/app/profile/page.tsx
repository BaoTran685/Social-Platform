'use client'
import ContentSection from "./components/ContentSection"
import PostSection from "./components/PostSection"
import SettingSection from "./components/SettingSection"
import MainWithNavbar from "../layouts/PageWithNavbar"
import { useSession } from "next-auth/react"


const ProfilePage = () => {
  const {data: session} = useSession();
  console.log(session);
  let name = session?.user?.name;
  return (
    <MainWithNavbar>
      <section className="text-[#37352F] mt-32">
        <div className="layout">
          <div />
          <div className="flex flex-col">
            <div className="flex flex-row justify-between">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-semibold">
                {name}
              </div>
              <SettingSection />
            </div>
            <div className="w-full h-0.5 bg-[#ddd] mt-2" />
            <ContentSection />
            <div className="w-full h-0.5 bg-[#ddd] mt-2" />
            <PostSection />
          </div>
          <div />
        </div>
      </section>
    </MainWithNavbar>
  )
}

export default ProfilePage;

