import ContentSection from "@/components/Profile/contentSection"
import PostSection from "@/components/Profile/postSection"
import SettingSection from "@/components/Profile/settingSection"
import MainWithNavbar from "@/layouts/pageWithNav"
import { ProfileObj } from "@/components/types/profile"
import { PROFILE_ITEMS } from "@/components/constants/profile"
import { getProfile } from "@/lib/getProfile"

interface DataProps {
  message: string,
  content: ProfileObj,
}

let profile: ProfileObj = PROFILE_ITEMS.initProfile;

const ProfilePage = async () => {
  const data: DataProps = await getProfile();
  console.log(data);
  if (data && data.message === 'success') {
    PROFILE_ITEMS.objectKey.forEach((item) => {
      profile[item] = data.content[item];
    })
  }
  console.log(profile)
  return (
    <MainWithNavbar>
      <section className="text-[#37352F] mt-20">
        <div className="layout">
          <div />
          <div className="flex flex-col">
            <div className="flex flex-row justify-between">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-semibold">
                {profile.name}
              </div>
              <SettingSection />
            </div>
            <div className="w-full h-0.5 bg-[#ddd] mt-2" />
            <ContentSection profile={profile} />
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


