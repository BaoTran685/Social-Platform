import { getProfileUpdate } from "@/app/actions/data/get-data/getProfileUpdate";
import { ProfileUpdateItems } from "@/components/Types/Profile/Update/update";
import { PROFILE_UPDATE_ITEMS } from "@/components/Constants/Profile/Update/update";
import ProfileUpdateFormSection from "@/components/Profile/Update/profileUpdateFormSection";
import SettingSection from "@/components/Profile/settingSection";
import { Suspense } from "react";
import ProfileUpdatePageLoading from "@/components/Loading/Profile/Update/profileUpdatePageLoading";

const ProfileUpdatePage = async () => {
  return (
    <Suspense fallback={<ProfileUpdatePageLoading />}>
      <InnerProfileUpdatePage />
    </Suspense>
  )
}

export default ProfileUpdatePage;


let profileUpdateItems: ProfileUpdateItems = PROFILE_UPDATE_ITEMS;

interface ServerDataProps {
  message: string,
  content: {
    username: string,
    name: string,
    email: string,
    description: string,
  },
  ok: boolean,
}

const InnerProfileUpdatePage = async () => {
  const data: ServerDataProps = await getProfileUpdate();

  return (
    <section className="flex-grow place-self-center flex my--container text-[#37352F] mt-10">
      <div className="flex-grow flex flex-col w-full">
        <div className="flex flex-row justify-between">
          <div className="text--main--header font-semibold">
            Update Profile
          </div>
          <SettingSection />
        </div>
        <div className="w-full h-0.5 bg-[#ddd] mt-2" />
        <div className="flex-grow flex flex-col w-full space-y-8 my-8">
          <div className="text--sub--header font-medium underline decoration-[#ec4899]">
            ~/{data?.content.username}
          </div>

          <ProfileUpdateFormSection items={profileUpdateItems} info={data?.content} />
        </div>
      </div>
    </section>
  )
}