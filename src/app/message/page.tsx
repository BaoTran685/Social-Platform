
import SettingSection from "@/components/Profile/settingSection"
import PostSkeleton from "@/components/Loading/postSkeleton";

const MessagePage = () => {
  return (
    <section className="text-[#37352F] mt-12">
      <div className="my--container mx-auto">
        <div className="flex flex-col">
          <div className="flex flex-row justify-between">
            {/* Profile name and settings */}
            <div className="text--main--header text-transparent no--select bg-gray-300 rounded-full animate-pulse w-1/2">
              t
            </div>
            {/* Setting */}
            <SettingSection />
          </div>

          {/* Divider Bar */}
          <div className="w-full h-0.5 bg-[#ddd] mt-2" />

          {/* Profile Info */}
          <div className="flex flex-col space-y-8 my-9">
            {/* User Name (ID) */}
            <div className="text--sub--header text-transparent no--select bg-gray-300 rounded-full animate-pulse w-1/4">
              t
            </div>

            {/* Info Statistics */}
            <div className="text--content flex flex-row items-center justify-center space-x-4">
              <div className="flex items-center space-x-1">
                <div className="loader-dot" /> <div>posts</div>
              </div>

              <div className="flex items-center space-x-1">
                <div className="loader-dot" /> <div>following</div>
              </div>

              <div className="flex items-center space-x-1">
                <div className="loader-dot" /> <div>followers</div>
              </div>
            </div>

            {/* Description */}
            <div className="flex-col space-y-2">
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

          {/* Divider Bar */}
          <div className="w-full h-0.5 bg-[#ddd]" />

          {/* Post Section */}
          <PostSkeleton />
          <PostSkeleton />
        </div>
      </div>
    </section>
  );
};

export default MessagePage;
