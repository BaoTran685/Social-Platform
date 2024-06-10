import SettingSection from "@/components/Profile/settingSection"
import PostSkeleton from "@/components/Loading/Profile/postSkeleton";
import ContentSectionLoading from "./contentSectionLoading";


const ProfilePageLoading = () => {
  return (
    <section className="text-[#37352F] my--container mx-auto mt-10">
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

        {/* Content Section */}
        <ContentSectionLoading />

        {/* Divider Bar */}
        <div className="w-full h-0.5 bg-[#ddd]" />

        {/* Post Section */}
        <PostSkeleton />
        <PostSkeleton />
      </div>
    </section>
  );
}

export default ProfilePageLoading;