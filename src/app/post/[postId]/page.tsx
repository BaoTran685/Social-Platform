import { getAllPostArray, getPost } from "@/app/actions/data/get-data/getPost";
import EditPostPage from "@/components/Profile/Post/editPostPage";
import ViewPostPage from "@/components/Profile/Post/viewPostPage";
import { notFound } from "next/navigation";



export const generateStaticParams = async () => {
  const data = await getAllPostArray();
  const posts = data.content.posts
  return posts.map((post) => ({
    postId: post.postId
  }))
}

interface Params {
  params: { postId: string },
  searchParams: { [key: string]: string | string[] | undefined },
}
const PostPage = async ({ params, searchParams }: Params) => {
  console.log(params, searchParams);

  const { postId } = params;
  const order = searchParams.o as string || '';
  const data = await getPost({ postId })
  const post = data.content.post

  if (!data.ok || !post) {
    return notFound();
  }

  if (order === 'view') {
    return (
      <ViewPostPage post={post} />
    )
  }
  else if (order === 'edit') {
    return (
      <EditPostPage post={post} />
    )
  }
}

export default PostPage;