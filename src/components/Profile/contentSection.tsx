import { ProfileObj } from "@/components/Types/Profile/profile";

const ContentSection = ({ profile }: { profile: ProfileObj }) => {
  const { username, number_post, number_following, number_follower, description } = profile;
  return (
    <div className="flex flex-col space-y-8 my-8">
      <div className="text--sub--header font-medium underline decoration-[#ec4899]">
        ~/{username}
      </div>
      <div className="text--content flex flex-row items-center justify-center space-x-4">
        <div className="flex items-center space-x-1">
          <span className="text-[#EA580C] font-bold">{number_post} </span>
          <span>posts</span>
        </div>
        <div className="flex items-center space-x-1">
          <span className="text-[#0EA5E9] font-bold">{number_following} </span>
          <span>following</span>
        </div>
        <div className="flex items-center space-x-1">
          <span className="text-[#3B82F6] font-bold">{number_follower} </span>
          <span>followers</span>
        </div>
      </div>
      <div className="text--content leading-relaxed text-left">
        {description}
      </div>
    </div>
  );
}

export default ContentSection;

