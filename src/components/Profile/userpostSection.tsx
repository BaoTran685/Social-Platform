import { getUserPost } from "@/app/actions/data/get-data/getPost";
import PostBox from "./Post/postBox";
import { Search_UserObj } from "../Types/Search/search";

const UserPostSection = async ({ user }: { user: Search_UserObj}) => {
  const data = await getUserPost({user});
  const posts = data?.content?.posts
  return (
    <div className="flex flex-col items-center justify-center space-y-8 mt-8">
      {posts && posts.reverse().map((post, index) => (
        <PostBox key={index} post={post} displayFull={false} editable={false}/>
      ))}
    </div>
  );
}

export default UserPostSection;

