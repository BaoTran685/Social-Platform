
const ContentSection = () => {
  return (
    <div className="flex flex-col space-y-8 my-10">
      <div className="text-xl sm:text-2xl font-medium underline decoration-[#ec4899]">
        iambaotran.05
      </div>
      <div className="text-base sm:text-lg flex flex-row items-center justify-center space-x-4">
        <div><span className="text-[#EA580C] font-bold">10 </span>posts</div>
        <div><span className="text-[#0EA5E9] font-bold">10 </span>following</div>
        <div><span className="text-[#3B82F6] font-bold">10 </span>followers</div>
      </div>
      <div className="text-base sm:text-lg text-left">
        Hi there, I'm Bao and I'm from Prince Edward Island (PEI), Canada. I'm studying at
        the Universtiy of Waterloo, majoring in Mathematics and Computing. I and my friend, Chris,
        are developing this social app together and would love listening to any feedback from you guys.
      </div>
    </div>
  );
}

export default ContentSection;

