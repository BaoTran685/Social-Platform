import PostBox from "./PostBox";


const PostSection = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-8 mt-10">
      <PostBox />
      <PostBox />
    </div>
  );
}

export default PostSection;