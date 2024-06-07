import { CREATE_POST_ITEMS } from "@/components/Constants/Profile/createPost";
import CreatePostFormSection from "@/components/Profile/CreatePost/CreatePostFormSection";
import { CreatePostItems } from "@/components/Types/Profile/createPost";


const today = new Date();

// Format the date to YYYY-MM-DD
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
const day = String(today.getDate()).padStart(2, '0');

// Create the date string in the format YYYY-MM-DD
const formattedDate = `${year}-${month}-${day}`;

let CreatePost_Items: CreatePostItems = {...CREATE_POST_ITEMS, initNewInfo: {...CREATE_POST_ITEMS.initNewInfo, date: formattedDate}};
const CreatePostPage = () => {
  return (
    <section className="my--container mx-auto">
      <div className="flex flex-col">
        <h1 className="text-center text--header underline my-16">Create Post</h1>
        <div className="w-full h-full">
          <CreatePostFormSection items={CreatePost_Items}  />
        </div>
      </div>
    </section>
  );
};

export default CreatePostPage;
