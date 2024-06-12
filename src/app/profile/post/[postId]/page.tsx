import { getAllPostArray, getPost } from "@/app/actions/data/get-data/getPost";
import PostBox from "@/components/Profile/Post/postBox";
import { notFound } from "next/navigation";



export const generateStaticParams = async () => {
  const data = await getAllPostArray();
  const posts = data.content.posts
  return posts.map((post) => ({
    postId: post.postId
  }))
}

const PostPage = async ({ params }: { params: { postId: string } }) => {
  const { postId } = params;
  const data = await getPost({ postId })
  const post = data.content.post
  console.log(data);
  if (!data.ok) {
    return notFound();
  }
  return (
    <section>
      {post && <PostBox post={post} displayFull={true} />}
    </section>
  )
}

export default PostPage;