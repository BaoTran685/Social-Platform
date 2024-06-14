import { getPostArray } from "@/app/actions/data/get-data/getPost";
import PostBox from "./Post/postBox";

const PostSection = async () => {
  const data = await getPostArray();
  const posts = data?.content?.posts
  return (
    <div className="flex flex-col items-center justify-center space-y-8 mt-8">
      {posts && posts.reverse().map((post, index) => (
        <PostBox key={index} post={post} displayFull={false} />
      ))}
    </div>
  );
}

export default PostSection;

