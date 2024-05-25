'use client';
import { Spinner } from "@/components/Icon/icons";
import PageWithNavbar from "@/layouts/pageWithNav";
import InputBox from "@/components/Profile/Update/inputBox";

import { FormEvent, useState } from "react"
import LoadingButton from "@/components/loadingButton";

const END_POINT = '/api/profile/update'

const UPDATE_INPUTS = [
  {
    label: 'New UserId',
    name: 'userid',
    type: 'text',
    placeholder: 'iambaotran.05',
    isInput: true,
  },
  {
    label: 'New Name',
    name: 'name',
    type: 'text',
    placeholder: 'Bao Tran',
    isInput: true,
  },
]
const DESCRIPTION = {
  label: 'New Description',
  name: 'description',
  type: 'text',
  placeholder: 'Say Something About Yourself',
  isInput: false,
}
const IDs = ['userid', 'name', 'description'];

const UpdatePage = () => {
  const [newInfo, setNewInfo] = useState({ userid: '', name: '', description: '' });
  const [fillError, setUserFillError] = useState({ userid: false, name: false, description: false});
  const [process, setProcess] = useState(false);

  const handleChange = (event: FormEvent<HTMLFormElement>) => {
    setNewInfo({
      ...newInfo,
      [event.currentTarget.name]: event.currentTarget.value,
    })
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let error = 0;
    IDs.map((item) => {
      if ((fillError as any)[item] === false && (newInfo as any)[item] === '') {
        setUserFillError((prev) => ({
          ...prev,
          [item]: true,
        }));
        error = 1;
      }
    });
    if (error === 1) {
      return;
    }
    console.log(newInfo);
    setProcess(true);
    const response = await fetch(END_POINT, {
      method: 'POST',
      body: JSON.stringify(newInfo),
    });
    console.log(response);
    setProcess(false);
  }
  return (
    <PageWithNavbar>
      <section className="layout">
        <div />
        <div className="flex flex-col space-y-6">
          <h1 className="text-center text-3xl underline">Update Profile</h1>
          <div className="w-full h-full bg-[#e6e6e67b] rounded-xl shadow-lg mb-5 md:mb-6 px-8 md:px-10 lg:px-14 xl:px-18 py-8">
            <form className="flex flex-col" onSubmit={(e) => handleSubmit(e)}>
              <div className="grid grid-cols-2 gap-4">
                {UPDATE_INPUTS.map((items, index) => (
                  <InputBox key={index} items={items} onChange={handleChange} />
                ))}
              </div>

              <InputBox items={DESCRIPTION} onChange={handleChange} />

              <LoadingButton type="submit" text="Update" isLoading={process}/>
            </form>
          </div>
        </div>
        <div />
      </section>
    </PageWithNavbar >
  )
}

export default UpdatePage;