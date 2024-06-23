
import { getProfile } from "@/app/actions/data/get-data/profile/getProfile"
import ProfilePageLoading from "@/components/Loading/Profile/profilePageLoading";
import ContentSection from "@/components/Profile/contentSection";
import PostSection from "@/components/Profile/postSection";
import SettingSection from "@/components/Profile/settingSection";
import { Profile_DataFromServer } from "@/components/Types/Profile/profile";
import { Suspense } from "react";

const ProfilePage = () => {

  return (
    <Suspense fallback={<ProfilePageLoading />}>
      <InnerProfilePage />
    </Suspense>
  )
}

export default ProfilePage;



const InnerProfilePage = async () => {
  const data: Profile_DataFromServer = await getProfile();

  return (
    <section className="my--container mx-auto text-[#37352F] mt-10">
      <div className="flex flex-col">
        <div className="flex flex-row justify-between">
          <div className="text--main--header font-semibold">
            {data?.content.name}
          </div>
          <SettingSection />
        </div>
        <div className="w-full h-0.5 bg-[#ddd] mt-2" />
        <ContentSection profile={data?.content} />
        <div className="w-full h-0.5 bg-[#ddd]" />
        <PostSection />
      </div>
    </section>
  )
}

