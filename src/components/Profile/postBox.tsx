import { dateToString } from "@/lib/date"

type Post = {
  title: string,
  content: string,
  createdAt: Date
}
interface PostBoxProps {
  post: Post,
  username: string,

}
const PostBox = ({ post, username }: PostBoxProps) => {

  return (
    <div className="flex flex-col w-full h-fit bg-[var(--background-grey-color)] rounded-lg shadow-md py-5 px-6 relative overflow-hidden">
      <div className="text--sub--header font-medium">{post.title}</div>
      <div className="text--content font-medium underline decoration-[#ec4899]">
        ~/{username}
      </div>
      <p className="text--content mt-3">{post.content.slice(0, 200)}</p>
      <div className="absolute bottom-0 right-0 inline-block rounded-tl-lg bg-[var(--khaki-color)] py-1 px-2">
        <div className="text-lg font-medium">
          {dateToString({today: post.createdAt})}
        </div> 
      </div> 
    </div>
  )
}

export default PostBox;