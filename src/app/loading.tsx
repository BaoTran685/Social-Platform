import PageWithNavbar from "@/layouts/pageWithNav";
import SettingSection from "@/components/Profile/settingSection"
import PostSkeleton from "@/components/Loading/postSkeleton";
const Loading = () => {
  return (
    <PageWithNavbar>
      <section className="text-[#37352F] mt-20">
  <div className="layout">
    <div />
    <div className="flex flex-col">
      {/* Profile name and settings */}
      <div className="flex flex-row justify-between">
        <div className="h-14 bg-gray-300 rounded-full animate-pulse w-1/3">
          {/* Setting */}
        </div>
        <SettingSection />
      </div>
      
      {/* Divider */}
      <div className="w-full h-0.5 bg-[#ddd] mt-2" />
      
      {/* Profile Info */}
      <div className="flex flex-col space-y-8 my-9">
        <div className="h-6 bg-gray-300 rounded-full  animate-pulse w-1/4 underline decoration-[#ec4899]">
        </div>
        
        {/* Info Statistics */}
        <div className="text-base sm:text-lg flex flex-row items-center justify-center space-x-4">
        <div className="flex items-center space-x-1">
            <div className="loader-dot "></div> <div>posts</div>
        </div>
        <div className="flex items-center space-x-1">
            <div className="loader-dot"></div> <div>following</div>
        </div>
        <div className="flex items-center space-x-1">
            <div className="loader-dot"></div> <div>followers</div>
        </div>
    </div>
        
        {/* Info Description */}
        <div className="flex-col space-y-2">
        <div className="h-3 bg-gray-300 rounded-full animate-pulse w-1/5 underline decoration-[#ec4899]">
        </div>
        <div className="h-3 bg-gray-300 rounded-full animate-pulse w-1/3 underline decoration-[#ec4899]">
        </div>
        </div> 
      </div>
      
      {/* Divider */}
      <div className="w-full h-0.5 bg-[#ddd]" />
      <PostSkeleton />
      <PostSkeleton />
    </div>
    <div />
  </div>
</section>
  
    </PageWithNavbar>
  )
}

export default Loading;