import PageWithNavbar from "@/layouts/pageWithNav";
import SettingSection from "@/components/Profile/settingSection"
import PostSkeleton from "@/components/Loading/postSkeleton";

const MessagePage = () => {
  return (
    <PageWithNavbar>
      <section className="text-[#37352F] mt-12">
        <div className="layout">
        <div />

          <div className="flex flex-col">
            <div className="flex flex-row justify-between">
              {/* Profile name and settings */}
              <div className="h-14 bg-gray-300 rounded-full animate-pulse w-1/3" />
              
              {/* Setting */}
              <SettingSection />
            </div>

            {/* Divider Bar */}
            <div className="w-full h-0.5 bg-[#ddd] mt-2" />

            {/* Profile Info */}
            <div className="flex flex-col space-y-8 my-9">
              {/* User Name (ID) */}
              <div className="h-6 bg-gray-300 rounded-full animate-pulse w-1/4 underline decoration-[#ec4899]" />

              {/* Info Statistics */}
              <div className="text-base sm:text-lg flex flex-row items-center justify-center space-x-4">
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
                <div className="h-3 bg-gray-300 rounded-full animate-pulse w-1/5 underline decoration-[#ec4899]" />
                <div className="h-3 bg-gray-300 rounded-full animate-pulse w-1/3 underline decoration-[#ec4899]" />
              </div>
            </div>

            {/* Divider Bar */}
            <div className="w-full h-0.5 bg-[#ddd]" />

            {/* Post Section */}
            <PostSkeleton />
            <PostSkeleton />
          </div>

          <div/>
        </div>
      </section>
    </PageWithNavbar>
  );
};

export default MessagePage;
