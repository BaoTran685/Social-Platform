import { formatDate } from "@/lib/lib";
import { Post } from "@prisma/client";
import DeleteIconButton from "./deleteIconButton";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { privacyOptions } from "@/components/Constants/Profile/CreatePost/createPost";




const ViewPostPage = ({ post }: { post: Post }) => {
  // get the default color of privacy from the db
  let privacyColor = '';
  privacyOptions.forEach((option) => {
    if (option.value === post.privacy) {
      privacyColor = option.color;
    }
  })
  return (
    <section className="text-[#37352F] mt-10 mx-4 sm:mx-10 md:mx-16 xl:mx-28">
      <div className="flex flex-col justify-center w-full">
        <div className="flex items-center space-x-2">
          {/* I use normal css here just to match the css of Select from SelectBox */}
          <span style={{ backgroundColor: privacyColor, borderRadius: '10px', content: '" "', display: 'block', flexShrink: '0', height: '11px', width: '11px' }} />
          <span className="text--sub--header font-medium">{post.title}</span>
        </div>
        <div className="flex flex-row space-x-1.5 text--content font-medium">
          <span className="underline decoration-[#ec4899]">~/{post.authorUsername}</span>
          <span>/</span>
          <span>{formatDate({ today: post.createdAt })}</span>
        </div>
        <div className="w-full h-0.5 bg-[#ddd] mt-2" />
        {/* After the arrow parts */}
        <div className="flex flex-row items-center justify-end mt-2">
          <div className="flex flex-row items-center space-x-1">
            <DeleteIconButton type='button' postId={post.postId} authorId={post.authorId}>
              <TrashIcon className="size-6 text-white" />
            </DeleteIconButton>
            <Link href={`/post/${post.postId}?o=edit`} className="block w-fit h-fit bg-[var(--khaki-color)] shadow-inner rounded-lg p-1.5">
              <PencilSquareIcon className="size-6" />
            </Link>
          </div>
        </div>
        <p className="text--sub--content leading-relaxed whitespace-pre-wrap mt-4">
          {post.content}
        </p>
      </div>

    </section>
  )
}

export default ViewPostPage;