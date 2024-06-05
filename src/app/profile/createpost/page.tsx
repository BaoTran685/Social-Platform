import React from 'react';
import InputBox from "./components/InputBox";
import ToolBox from "./components/ToolBox";
import PageWithNavbar from '@/layouts/pageWithNav';


const POST = {
  name: 'description',
  type: 'text',
  placeholder: 'Type Here',
}

const CreatePostPage = () => {
  return (
    <PageWithNavbar>
      <section className="">
        <div className="w-full">
          <div className="flex items-center space-x-1">
            <InputBox items={POST} />
          </div>
        </div>
      </section>
    </PageWithNavbar>

  );
};

export default CreatePostPage;
