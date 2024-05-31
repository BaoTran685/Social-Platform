import ContentSection from "@/components/Profile/contentSection"
import PostSection from "@/components/Profile/postSection"
import SettingSection from "@/components/Profile/settingSection"
import MainWithNavbar from "@/layouts/pageWithNav"
import { ProfileObj } from "@/components/Types/Profile/profile"
import { getProfile } from "@/app/actions/data/getProfile"

interface ServerDataProps {
  message: string,
  content: ProfileObj,
}

const ProfilePage = async () => {
  const data: ServerDataProps = await getProfile();
  console.log(data);
  return (
    <MainWithNavbar>
      <section className="text-[#37352F] mt-20">
        <div className="layout">
          <div />
          <div className="flex flex-col">
            <div className="flex flex-row justify-between">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-semibold">
                {data?.content.name}
              </div>
              <SettingSection />
            </div>
            <div className="w-full h-0.5 bg-[#ddd] mt-2" />
            <ContentSection profile={data?.content} />
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


