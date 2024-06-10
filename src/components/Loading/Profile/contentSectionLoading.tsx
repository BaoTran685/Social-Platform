import UsernameLoading from "./usernameLoading"



const ContentSectionLoading = () => {
  return (
    <div className="flex flex-col space-y-8 my-8">
      {/* User Name (ID) */}
      <UsernameLoading />
      {/* Number */}
      <div className="text--content flex flex-row items-center justify-center space-x-4">
        <div className="flex items-center space-x-1">
          <span className="loader-dot" /> <span>posts</span>
        </div>

        <div className="flex items-center space-x-1">
          <span className="loader-dot" /> <span>following</span>
        </div>

        <div className="flex items-center space-x-1">
          <span className="loader-dot" /> <span>followers</span>
        </div>
      </div>
      {/* Description */}
      <div className="flex flex-col space-y-2">
        <div className="text--content text-transparent no--select bg-gray-300 rounded-full animate-pulse w-2/5">
          t
        </div>
        <div className="text--content text-transparent no--select bg-gray-300 rounded-full animate-pulse w-3/5">
          t
        </div>
        <div className="text--content text-transparent no--select bg-gray-300 rounded-full animate-pulse w-4/5">
          t
        </div>
      </div>
    </div>
  )
}

export default ContentSectionLoading;