import getPost from "@/app/actions/data/get-data/getPost";
import PostBox from "./postBox";

interface PostSectionProps {
  username: string,
}
const PostSection = async ({username}: PostSectionProps) => {
  const data = await getPost();
  const posts = data?.content?.posts
  return (
    <div className="flex flex-col items-center justify-center space-y-8 mt-8">
      {posts && posts.map((post, index) => (
        <PostBox key={index} post={post} username={username}/>
      ))}
    </div>
  );
}

export default PostSection;

