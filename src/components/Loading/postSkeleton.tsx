


const PostSkeleton = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-8 mt-10">
      <div className="flex flex-col flex_row w-full h-fit bg-[#e7e7e76b] rounded-lg shadow-md p-8 animated animate-pulse relative">

        {/* Title Section */}
        <div className="h-7 bg-gray-300 rounded-full  animate-pulse w-1/3 underline decoration-[#ec4899]" />

        {/*Content Section */}
        <div className="flex flex-col sm:flex-row justify-between">
          {/* Author */}
          <div className="h-6 mt-2 bg-gray-300 rounded-full animate-pulse w-1/5 underline decoration-[#ec4899]" />

          {/* Date */}
          <div className="h-6 mt-2 bg-gray-300 rounded-full animate-pulse w-1/5 underline decoration-[#ec4899]" />

        </div>

        {/* Content */}
        <div className="h-4 mt-5 bg-gray-300 rounded-full  animate-pulse w-full underline decoration-[#ec4899]" />
        <div className="h-4 mt-4 bg-gray-300 rounded-full  animate-pulse w-full underline decoration-[#ec4899]" />
        <div className="h-4 mt-4 mb-5 bg-gray-300 rounded-full  animate-pulse w-full underline decoration-[#ec4899]" />

      </div>

    </div>

  )
}

export default PostSkeleton;