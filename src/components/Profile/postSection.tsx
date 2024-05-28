import PostBox from "./postBox";


const PostSection = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-8 mt-10">
      <PostBox />
      <PostBox />
      <PostBox />
      <PostBox />
      <PostBox />
    </div>
  );
}

export default PostSection;