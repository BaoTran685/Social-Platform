import { getPostArray } from "@/app/actions/data/get-data/getPost";
import PostBox from "./Post/postBox";
import Link from "next/link";

const PostSection = async () => {
  const data = await getPostArray();
  const posts = data?.content?.posts
  return (
    <div className="flex flex-col items-center justify-center space-y-8 mt-8">
      {posts && posts.reverse().map((post, index) => (
        <Link key={index} href={`/profile/post/${post.postId}`} className="w-full h-fit">
          <PostBox post={post} displayFull={false} />
        </Link>
      ))}
    </div>
  );
}

export default PostSection;

