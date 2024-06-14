import { getUsername } from "@/app/actions/data/get-data/getUsername";
import { CREATE_POST_ITEMS } from "@/components/Constants/Profile/CreatePost/createPost";
import UsernameLoading from "@/components/Loading/Profile/usernameLoading";
import PostFormSection from "@/components/Profile/Post/postFormSection";
import SettingSection from "@/components/Profile/settingSection";
import { CreatePostItems } from "@/components/Types/Profile/CreatePost/createPost";
import { dateToString } from "@/lib/lib";
import { Suspense } from "react";

const CreatePostPage = async () => {
  return (
    <section className="place-self-center flex-grow flex my--container text-[#37352F] mt-10">
      <div className="flex-grow flex flex-col w-full">
        <div className="flex flex-row justify-between">
          <div className="text--main--header font-semibold">
            Create Post
          </div>
          <SettingSection />
        </div>
        <div className="w-full h-0.5 bg-[#ddd] mt-2" />
        <div className="flex-grow flex flex-col w-full space-y-8 my-8">
          <Suspense fallback={<UsernameLoading />}>
            <InnerCreatePostPage />
          </Suspense>
          <PostFormSection items={CreatePost_Items} />
        </div>
      </div>
    </section>
  )
};

export default CreatePostPage;

const CreatePost_Items: CreatePostItems = { ...CREATE_POST_ITEMS };

interface ServerDataProps {
  message: string,
  content: {
    username: string,
  },
  ok: boolean,
}
const InnerCreatePostPage = async () => {
  // to load the username
  const data: ServerDataProps = await getUsername();
  return (
    <div className="text--sub--header font-medium underline decoration-[#ec4899]">
      ~/{data?.content.username}
    </div>
  )
}