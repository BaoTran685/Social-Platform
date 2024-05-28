import PageWithNavbar from "@/layouts/pageWithNav";
import { getProfile } from "@/lib/getProfile";
import { ProfileObj } from "@/components/types/profile";
import UpdateFormSection from "@/components/Profile/Update/updateFormSection";
import { ProfileUpdateItems } from "@/components/types/profileUpdate";
import { PROFILE_UPDATE_ITEMS } from "@/components/constants/profileUpdate";

interface DataProps {
  message: string,
  content: ProfileObj,
}

let profileUpdateItems: ProfileUpdateItems = PROFILE_UPDATE_ITEMS;

const UpdatePage = async () => {
  const data: DataProps = await getProfile();

  return (
    <PageWithNavbar>
      <section className="layout">
        <div />
        <div className="flex flex-col space-y-6">
          <h1 className="text-center text-3xl underline">Update Profile</h1>
          <div className="w-full h-full mb-5 md:mb-6 px-8 md:px-10 lg:px-14 xl:px-18 py-8">
            <UpdateFormSection items={profileUpdateItems} profile={data?.content} />
          </div>
        </div>
        <div />
      </section>
    </PageWithNavbar >
  )
}

export default UpdatePage;