import React from 'react';
import InputBox from "./components/InputBox";
import ToolBox from "./components/ToolBox";


const POST = {
  name: 'description',
  type: 'text',
  placeholder: 'Type Here',
}

const CreatePage = () => {
  return (
    <main className="pt-6">
      <div className="w-full">
        <div className="flex items-center space-x-1">
          <ToolBox/>
          <InputBox items={POST}/>
        </div>
      </div>
    </main>
  );
};

export default CreatePage;
