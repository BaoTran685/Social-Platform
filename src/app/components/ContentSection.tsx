
import BoxPost from "./BoxPost";
const ContentSection = () => {
  return (
    <div className="flex flex-col space-y-8 mt-10">
      <div className="text-xl font-medium underline decoration-pink-400">
        iambaotran.05
      </div>
      <div className="text-lg flex flex-row items-center justify-center space-x-4">
        <div><span className="text-[#EA580C] font-bold">10 </span>posts</div>
        <div><span className="text-[#0EA5E9] font-bold">10 </span>following</div>
        <div><span className="text-[#3B82F6] font-bold">10 </span>followers</div>
      </div>
      <div className="text-lg">
        Hi there, I'm Bao and I'm from Prince Edward Island (PEI), Canada. I'm studying at
        the Universtiy of Waterloo, majoring in Mathematics and Computing. I and my friend, Chris,
        are developing this social app together and would love listening to any feedback from you guys.
      </div>

      <div className="flex flex-col items-center justify-center">
        <BoxPost />
      </div>
    </div>

  );
}

export default ContentSection;