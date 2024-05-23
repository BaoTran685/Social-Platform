'use client'
import ContentSection from "./components/ContentSection"
import PostSection from "./components/PostSection"
import SettingSection from "./components/SettingSection"
import MainWithNavbar from "../layouts/PageWithNavbar"
import useSWR from "swr"
import { DataContent } from "../components/types"
import { PROFILE_DATA_CONTENT, PROFILE_DATA } from "../components/constants"

const fetcher = (url: string) => fetch(url, {
  method: 'GET',
}).then(response => response.json());


let userInfo: DataContent = PROFILE_DATA_CONTENT;

const ProfilePage = () => {
  const { data, error, isLoading } = useSWR('/api/profile/info', fetcher);
  console.log(data);
  if (data && data.content) {
    PROFILE_DATA.forEach((item) => {
      (userInfo as any)[item] = (data.content as any)[item];
    })
  }
  console.log(userInfo)
  return (
    <MainWithNavbar>
      <section className="text-[#37352F] mt-32">
        <div className="layout">
          <div />
          <div className="flex flex-col">
            <div className="flex flex-row justify-between">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-semibold">
                {userInfo.name}
              </div>
              <SettingSection />
            </div>
            <div className="w-full h-0.5 bg-[#ddd] mt-2" />
            <ContentSection userInfo={userInfo} />
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

