import React from 'react';
import InputBox from "./components/InputBox";


const POST = {
  name: 'description',
  type: 'text',
  placeholder: 'Type Here',
}

const CreatePostPage = () => {
  return (
    <section className="">
      <div className="w-full">
        <div className="flex items-center space-x-1">
          <InputBox items={POST} />
        </div>
      </div>
    </section>

  );
};

export default CreatePostPage;
