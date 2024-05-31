import PageWithNavbar from "@/layouts/pageWithNav";
import UpdateFormSection from "@/components/profile/update/updateFormSection";
import { ProfileUpdateItems, UserObj } from "@/components/types/profile/profileUpdate";
import { PROFILE_UPDATE_ITEMS } from "@/components/constants/profile/profileUpdate";
import { getProfileUpdate } from "@/app/actions/data/getProfileUpdate";

interface ServerDataProps {
  message: string,
  content: UserObj,
}

let profileUpdateItems: ProfileUpdateItems = PROFILE_UPDATE_ITEMS;

const ProfileUpdatePage = async () => {
  const data: ServerDataProps = await getProfileUpdate();

  return (
    <PageWithNavbar>
      <section className="layout">
        <div />
        <div className="flex flex-col space-y-6">
          <h1 className="text-center text-3xl underline">Update Profile</h1>
          <div className="w-full h-full mb-5 md:mb-6 px-8 md:px-10 lg:px-14 xl:px-18 py-8">
            <UpdateFormSection items={profileUpdateItems} info={data?.content} />
          </div>
        </div>
        <div />
      </section>
    </PageWithNavbar >
  )
}

export default ProfileUpdatePage;