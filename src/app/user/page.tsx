
import { getUser } from '@/app/actions/data/get-data/getUser';
import ProfilePageLoading from '@/components/Loading/Profile/profilePageLoading';
import { Suspense } from 'react';
import ContentSection from '@/components/Profile/contentSection';
import PostSection from '@/components/Profile/postSection';
import SettingSection from '@/components/Profile/settingSection';
import { Search_UserObj } from '@/components/Types/Search/search';

interface UserPageProps {
    searchParams: { [key: string]: string }
  }
  
  const UserPage = async ({ searchParams }: UserPageProps) => {
    console.log("Server log: hello");
    const userId = searchParams.i || '';
    console.log("search id:", { userId });
  
    if (!userId) {
      return <p>User ID is missing</p>;
    }
  
    const data = await getUser({ userId });
    const { message, content, ok } = data;
    const users = content.users as Search_UserObj;
    console.log("Server log:", { userId, message, ok });
  
    return (
      <Suspense fallback={<ProfilePageLoading />}>
        <InnerProfilePage user={users} />
      </Suspense>
    );
  };
const InnerProfilePage = ({ user }: { user: Search_UserObj }) => {
    if(user){
  return (
    <section className="my--container mx-auto text-[#37352F] mt-10">
      <div className="flex flex-col">
        <div className="flex flex-row justify-between">
          <div className="text--main--header font-semibold">
            {user.info?.name}
          </div>
        </div>
        <div className="w-full h-0.5 bg-[#ddd] mt-2" />
        <ContentSection user={user} />
        <div className="w-full h-0.5 bg-[#ddd]" />
      </div>
    </section>
  );
}
};

export default UserPage;
