'use client'
import ContentSection from "@/components/Profile/contentSection"
import PostSection from "@/components/Profile/postSection"
import SettingSection from "@/components/Profile/settingSection"
import MainWithNavbar from "@/layouts/pageWithNav"
import useSWR from "swr"
import { ProfileDataObj } from "@/components/types/profile"
import { PROFILE_DATA_OBJ, PROFILE_DATA } from "@/components/constants/profile"

const fetcher = (url: string) => fetch(url, {
  method: 'GET',
}).then(response => response.json());


let userProfile: ProfileDataObj = PROFILE_DATA_OBJ;

const ProfilePage = () => {
  const { data, error, isLoading } = useSWR('/api/profile/info', fetcher);
  console.log(data);
  if (data && data.content) {
    PROFILE_DATA.forEach((item) => {
      (userProfile as any)[item] = (data.content as any)[item];
    })
  }
  console.log(userProfile)
  return (
    <MainWithNavbar>
      <section className="text-[#37352F] mt-32">
        <div className="layout">
          <div />
          <div className="flex flex-col">
            <div className="flex flex-row justify-between">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-semibold">
                {userProfile.name}
              </div>
              <SettingSection />
            </div>
            <div className="w-full h-0.5 bg-[#ddd] mt-2" />
            <ContentSection userProfile={userProfile} />
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

