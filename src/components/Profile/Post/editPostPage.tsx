
import { EDIT_POST_ITEMS } from "@/components/Constants/Profile/EditPost/editPost";
import DeleteButton from "@/components/Profile/Post/deleteButton";
import PostFormSection from "@/components/Form/Post/postFormSection";
import SettingSection from "@/components/Profile/settingSection";
import { EditPostItems } from "@/components/Types/Post/EditPost/editPost";
import { authOptions } from "@/lib/authOptions";
import { Post } from "@prisma/client";
import { getServerSession } from "next-auth";
import { notFound } from "next/navigation";



const EditPostPage = ({ post }: { post: Post }) => {
  return (
    <section className="place-self-center flex-grow flex my--container text-[#37352F] mt-10">
      <div className="flex-grow flex flex-col w-full">
        <div className="flex flex-row justify-between">
          <div className="text--main--header font-semibold">
            Edit Post
          </div>
          <SettingSection />
        </div>
        <div className="w-full h-0.5 bg-[#ddd] mt-2" />
        <InnerEditPostPage post={post} />
      </div>
    </section>
  )
}

export default EditPostPage;


const InnerEditPostPage = async ({ post }: { post: Post }) => {
  const session = await getServerSession(authOptions);
  const id = session?.user?.id;
  // if the current session user is not the same as the post author, then he/she cant edit the post
  if (id === null  || id !== post.authorId) {
    return notFound(); // will need to return unauthorized page
  }
  const EditPost_Items: EditPostItems = { ...EDIT_POST_ITEMS, initNewInfo: { title: post.title, privacy: post.privacy, content: post.content, } }
  console.log(post)
  return (
    <div className="flex-grow flex flex-col w-full space-y-8 my-8">
      <div className="flex flex-row justify-between">
        <span className="flex flex-col items-center justify-center text--sub--header font-medium underline decoration-[#ec4899]">~/{post.authorUsername}</span>
        <DeleteButton type='button' text='Remove Post' postId={post.postId} authorId={post.authorId} />
      </div>
      <PostFormSection items={EditPost_Items} postId={post.postId} authorId={post.authorId} />
    </div>
  )
}