import { Profile_ContentObj } from "@/components/Types/Profile/profile";

const ContentSection = ({ user }: { user: Profile_ContentObj }) => {
  return (
    <div className="flex flex-col space-y-8 my-8">
      <div className="text--sub--header font-medium underline decoration-[#ec4899]">
        ~/{user.username}
      </div>
      <div className="text--content flex flex-row items-center justify-center space-x-4">
        <div className="flex items-center space-x-1">
          <span className="text-[#EA580C] font-bold">{user.number?.number_post} </span>
          <span>posts</span>
        </div>
        <div className="flex items-center space-x-1">
          <span className="text-[#0EA5E9] font-bold">{user.number?.number_following} </span>
          <span>following</span>
        </div>
        <div className="flex items-center space-x-1">
          <span className="text-[#3B82F6] font-bold">{user.number?.number_follower} </span>
          <span>followers</span>
        </div>
      </div>
      <div className="text--content leading-relaxed text-left">
        {user.info?.description}
      </div>
    </div>
  );
}

export default ContentSection;

