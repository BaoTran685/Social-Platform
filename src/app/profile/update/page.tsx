'use client';
import PageWithNavbar from "@/layouts/pageWithNav";
import UpdateInputBox from "@/components/Profile/Update/updateInputBox";

import { FormEvent, useState } from "react";
import LoadingButton from "@/components/loadingButton";

import { PROFILE_UPDATE_ITEMS } from "@/components/constants/profileUpdate";

const UpdatePage = () => {
  const [newInfo, setNewInfo] = useState(PROFILE_UPDATE_ITEMS.initNewInfo);
  const [fillError, setUserFillError] = useState(PROFILE_UPDATE_ITEMS.initFillError);
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
    PROFILE_UPDATE_ITEMS.objectKey.map((item) => {
      if (fillError[item] === false && newInfo[item] === '') {
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
    const response = await fetch(PROFILE_UPDATE_ITEMS.endPoint, {
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
          <div className="w-full h-full mb-5 md:mb-6 px-8 md:px-10 lg:px-14 xl:px-18 py-8">
            <form className="flex flex-col" onSubmit={(e) => handleSubmit(e)}>
              <div className="grid grid-cols-2 gap-4">
                <UpdateInputBox items={PROFILE_UPDATE_ITEMS.fields.userid} onChange={handleChange} fillError={fillError.userid} />
                <UpdateInputBox items={PROFILE_UPDATE_ITEMS.fields.name} onChange={handleChange} fillError={fillError.description} />
              </div>
              <UpdateInputBox items={PROFILE_UPDATE_ITEMS.fields.description} onChange={handleChange} fillError={fillError.description} />
              <LoadingButton type="submit" text="Update" isLoading={process} />
            </form>
          </div>
        </div>
        <div />
      </section>
    </PageWithNavbar >
  )
}

export default UpdatePage;