import Link from "next/link"
import { BookOpenIcon, PencilSquareIcon } from "@heroicons/react/24/outline"
import { getPrivacyOptions } from "@/lib/Profile/Post/lib"

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
  editable: boolean 
}

const CONTENT_LENGTH_THRESHOLD = 100;
const TITLE_LENGTH_THRESHOLD = 40;
const PostBox = ({ post, displayFull, editable }: PostBoxProps) => {
  const content_length = post.content.length;
  const title_length = post.title.length;
  // get the default color of privacy from the db
  const option = getPrivacyOptions({ value: post.privacy })
  return (
    <div className="text-[black] w-full h-fit bg-[var(--background-grey-color)] rounded-lg shadow-md py-4 px-6 relative overflow-hidden">
      <div className="relative flex flex-col">
        <div className="flex flex-row items-center space-x-2 mr-20">
          {/* I use normal css here just to match the css of Select from SelectBox */}
          <div style={{ backgroundColor: option?.color, borderRadius: '10px', content: '" "', display: 'block', flexShrink: '0', height: '11px', width: '11px' }} />
          <h2 className="text--sub--header font-medium">
            {displayFull ? (
              post.title
            ) : (
              <>
                {post.title.slice(0, TITLE_LENGTH_THRESHOLD)}
                {title_length > TITLE_LENGTH_THRESHOLD && '...'}
              </>
            )}
          </h2>
        </div>
        {editable === true ? (
        <div className="absolute top-0 right-0 flex flex-row items-center space-x-1">
          <Link href={`/post/${post.postId}?o=view`} className="block w-fit h-fit bg-[var(--khaki-color)] shadow-inner rounded-lg p-1.5">
            <BookOpenIcon className="size-6" />
          </Link>
          <Link href={`/post/${post.postId}?o=edit`} className="block w-fit h-fit bg-[var(--khaki-color)] shadow-inner rounded-lg p-1.5">
            <PencilSquareIcon className="size-6" />
          </Link>
        </div>
        ) : null
      }
        <h3 className="text--content font-medium underline decoration-[#ec4899]">
          ~/{post.authorUsername}
        </h3>
        <p className="text--sub--content leading-relaxed whitespace-pre-wrap mt-3">
          {displayFull ? (
            post.content
          ) : (
            <>
              {post.content.slice(0, CONTENT_LENGTH_THRESHOLD)}
              {content_length > 100 && ('...')}
            </>
          )}
        </p>
      </div>
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