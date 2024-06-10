import { getUsername } from "@/app/actions/data/get-data/getUsername";
import { CREATE_POST_ITEMS } from "@/components/Constants/Profile/CreatePost/createPost";
import CreatePostFormSection from "@/components/Profile/CreatePost/createPostFormSection";
import SettingSection from "@/components/Profile/settingSection";
import { CreatePostItems } from "@/components/Types/Profile/CreatePost/createPost";


const today = new Date();
// Format the date to YYYY-MM-DD
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
const day = String(today.getDate()).padStart(2, '0');
// Create the date string in the format YYYY-MM-DD
const formattedDate = `${year}-${month}-${day}`;
const CreatePost_Items: CreatePostItems = { ...CREATE_POST_ITEMS, initNewInfo: { ...CREATE_POST_ITEMS.initNewInfo, date: formattedDate } };

interface ServerDataProps {
  message: string,
  content: {
    username: string,
  },
  ok: boolean,
}
const CreatePostPage = async () => {
  const data: ServerDataProps = await getUsername();
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
          <div className="text--sub--header font-medium underline decoration-[#ec4899]">
            ~/{data?.content.username}
          </div>
          <CreatePostFormSection items={CreatePost_Items} />
        </div>
      </div>
    </section>
  );
};

export default CreatePostPage;
