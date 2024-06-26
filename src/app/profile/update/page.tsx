import { getProfileUpdate } from "@/app/actions/data/get-data/profile/getProfileUpdate";
import { ProfileUpdateItems, ProfileUpdate_DataFromServer } from "@/components/Types/Profile/Update/update";
import { PROFILE_UPDATE_ITEMS } from "@/components/Constants/Profile/Update/update";
import ProfileUpdateFormSection from "@/components/Form/Profile/Update/profileUpdateFormSection";
import SettingSection from "@/components/Profile/settingSection";
import { Suspense } from "react";
import ProfileUpdatePageLoading from "@/components/Loading/Profile/Update/profileUpdatePageLoading";

const ProfileUpdatePage = async () => {
  // space for Suspense if needed
  return (
    <InnerProfileUpdatePage />
  )
}

export default ProfileUpdatePage;


let profileUpdateItems: ProfileUpdateItems = PROFILE_UPDATE_ITEMS;


const InnerProfileUpdatePage = async () => {
  const data: ProfileUpdate_DataFromServer = await getProfileUpdate();
  const { message, content, ok } = data;
  const { user } = content;
  if (ok && user) {
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
              ~/{user.username}
            </div>

            <ProfileUpdateFormSection items={profileUpdateItems} info={user.info || profileUpdateItems.initNewInfo} emailVerified={user.emailVerified} />
          </div>
        </div>
      </section>
    )
  }
  // handle error
}