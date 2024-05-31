
import { getProfile } from "@/app/actions/data/getProfile"
import ContentSection from "@/components/profileFolder/contentSection";
import PostSection from "@/components/profileFolder/postSection";
import SettingSection from "@/components/profileFolder/settingSection";
import { ProfileObj } from "@/components/typesFolder/profileFolder/profile";
import PageWithNavbar from "@/layouts/pageWithNav";

interface ServerDataProps {
  message: string,
  content: ProfileObj,
}

const ProfilePage = async () => {
  const data: ServerDataProps = await getProfile();
  console.log(data);
  return (
    <PageWithNavbar>
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
    </PageWithNavbar>
  )
}

export default ProfilePage;