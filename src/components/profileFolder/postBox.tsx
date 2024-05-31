

const PostBox = () => {
  return (
    <div className="flex flex-col w-full h-fit bg-[#e7e7e76b] rounded-lg shadow-md p-8">
      <div className="text-2xl font-bold">Welcoming Post</div>
      <div className="flex flex-col sm:flex-row justify-between">
        <div className="">
          <span className="text-base sm:text-lg font-medium cursor-pointer underline decoration-[#ec4899]">
            @iambaotran.05
          </span>
        </div>
        <div className="text-base sm:text-lg italic">May 12, 2024</div>
      </div>
      <div className="place-self-center font-medium cursor-pointer mt-4">See more...</div>
    </div>
  )
}

export default PostBox;