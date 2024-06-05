import PageWithNavbar from "@/layouts/pageWithNav";

import { getProfileUpdate } from "@/app/actions/data/get-data/getProfileUpdate";
import { ProfileUpdateItems, UserObj } from "@/components/Types/Profile/profileUpdate";
import { PROFILE_UPDATE_ITEMS } from "@/components/Constants/Profile/profileUpdate";
import UpdateFormSection from "@/components/Profile/Update/updateFormSection";



let profileUpdateItems: ProfileUpdateItems = PROFILE_UPDATE_ITEMS;

interface ServerDataProps {
  message: string,
  content: UserObj,
  ok: boolean,
}
const ProfileUpdatePage = async () => {
  const data: ServerDataProps = await getProfileUpdate();

  return (
    <PageWithNavbar>
      <section className="my--container mx-auto">
        <div className="flex flex-col space-y-20">
          <h1 className="text-center text-3xl underline">Update Profile</h1>
          <div className="w-full h-full">
            <UpdateFormSection items={profileUpdateItems} info={data?.content} />
          </div>
        </div>
      </section>
    </PageWithNavbar >
  )
}

export default ProfileUpdatePage;