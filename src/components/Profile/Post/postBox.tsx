import { Pencil } from "@/components/Icon/icons"
import PostSettingSection from "./postSettingSection"
import Link from "next/link"
import { ArrowTopRightOnSquareIcon, PencilSquareIcon, ViewfinderCircleIcon } from "@heroicons/react/24/outline"
import { privacyOptions } from "@/components/Constants/Profile/CreatePost/createPost"

type Post = {
  authorUsername: string,
  postId: string,
  title: string,
  content: string,
  privacy: string,
  createdAt: Date
}
interface PostBoxProps {
  post: Post,
  displayFull: boolean
}
const PostBox = ({ post, displayFull }: PostBoxProps) => {
  const length = post.content.length;
  // get the default color of privacy from the db
  let privacyColor = '';
  privacyOptions.forEach((option) => {
    if (option.value === post.privacy) {
      privacyColor = option.color;
    }
  })
  return (
    <div className="text-[black] flex flex-col w-full h-fit bg-[var(--background-grey-color)] rounded-lg shadow-md py-4 px-6 relative overflow-hidden">
      <div className="flex flex-row justify-between">
        <div className="flex items-center">
          {/* I use normal css here just to match the css of Select from SelectBox */}
          <span style={{ backgroundColor: privacyColor, borderRadius: 10, content: '" "', display: 'block', marginRight: 8, height: 11, width: 11 }} />
          <span className="text--sub--header font-medium">{post.title}</span>
        </div>
        <div className="flex flex-row items-center space-x-1">
          <Link href={`/profile/post/${post.postId}`} className="block w-fit h-fit bg-[var(--khaki-color)] shadow-inner rounded-lg p-1.5">
            <ArrowTopRightOnSquareIcon className="size-6" />
          </Link>
          <Link href={`/profile/editpost/${post.postId}`} className="block w-fit h-fit bg-[var(--khaki-color)] shadow-inner rounded-lg p-1.5">
            <PencilSquareIcon className="size-6" />
          </Link>
        </div>
      </div>
      <div className="text--content font-medium underline decoration-[#ec4899]">
        ~/{post.authorUsername}
      </div>
      {displayFull ? (
        <p className="text--sub--content leading-relaxed whitespace-pre-wrap mt-3">{post.content}</p>
      ) : (
        <p className="text--sub--content leading-relaxed whitespace-pre-wrap mt-3">{post.content.slice(0, 100)}
          {length > 100 && ('...')}
        </p>
      )}


    </div >
  )
}

export default PostBox;

{/* <div className="absolute bottom-0 right-0 inline-block rounded-tl-lg bg-[var(--khaki-color)] py-1 px-3">
        <div className="text--sub--content font-medium">
          {dateToString({ today: post.createdAt })}
        </div>
      </div> */}


{/* <div className="flex flex-row justify-end">
        <Link href={`/profile/post/${post.postId}`} className='w-fit rounded-lg bg-[var(--khaki-color)] shadow-inner hover:brighter--shadow--khaki hover:brightness-105 px-3 py-1'>
          <span className="text--sub--content font-medium flex items-center justify-center">see post</span>
        </Link>

      </div>
      <PostSettingSection postId={post.postId} /> */}