import SettingSection from "@/components/Profile/settingSection";
import UsernameLoading from "../usernameLoading";
import ProfileUpdateFormSectionLoading from "./profileUpdateFormSectionLoading";
import { PROFILE_UPDATE_ITEMS } from "@/components/Constants/Profile/Update/update";



const ProfileUpdatePageLoading = () => {
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
          <UsernameLoading />
          <ProfileUpdateFormSectionLoading field={PROFILE_UPDATE_ITEMS.field}/>
        </div>
      </div>
    </section>
  )
}

export default ProfileUpdatePageLoading;