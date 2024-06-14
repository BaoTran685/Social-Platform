import PostSettingSection from "./postSettingSection"
import Link from "next/link"

type Post = {
  authorUsername: string,
  postId: string,
  title: string,
  content: string,
  createdAt: Date
}
interface PostBoxProps {
  post: Post,
  displayFull: boolean
}
const PostBox = ({ post, displayFull }: PostBoxProps) => {
  const length = post.content.length;
  return (
    <div className="text-[black] flex flex-col w-full h-fit bg-[var(--background-grey-color)] rounded-lg shadow-md py-5 px-6 relative overflow-hidden">
      <div className="text--sub--header font-medium">{post.title}</div>
      <div className="text--content font-medium underline decoration-[#ec4899]">
        ~/{post.authorUsername}
      </div>
      {displayFull ? (
        <p className="text--content leading-relaxed whitespace-pre-wrap mt-3">{post.content}</p>
      ) : (
        <p className="text--content leading-relaxed whitespace-pre-wrap mt-3">{post.content.slice(0, 200)}
          {length > 200 && ('...')}
        </p>
      )}
      <div className="flex flex-row justify-end">
        <Link href={`/profile/post/${post.postId}`} className='w-fit rounded-lg bg-[var(--khaki-color)] shadow-inner hover:brighter--shadow--khaki hover:brightness-105 px-3 py-1'>
          <span className="text--sub--content font-medium flex items-center justify-center">see post</span>
        </Link>
      </div>
      <PostSettingSection postId={post.postId} />

    </div >
  )
}

export default PostBox;

{/* <div className="absolute bottom-0 right-0 inline-block rounded-tl-lg bg-[var(--khaki-color)] py-1 px-3">
        <div className="text--sub--content font-medium">
          {dateToString({ today: post.createdAt })}
        </div>
      </div> */}