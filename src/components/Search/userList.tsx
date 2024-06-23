import React from "react";
import { getAllUsers } from "@/app/actions/data/get-data/getUser";

const UserList = async ({ query }: {query: string}) => {
    const data= await getAllUsers();
    const userInfo= data.content.users

    const filterUserInfo = Array.isArray (userInfo) ? userInfo.filter((user) => {
       return user.name.toLowerCase().includes(query.toLowerCase());
        }): [];
        
  return (
    <div>
    {filterUserInfo.length === 0 && <p className="mt-4">No user found</p>}
    <div className="flex flex-col mt-6">
      {filterUserInfo.map((user) => (
        <div key={user.infoId} className="flex flex-col">
          <div className="flex space-x-6 items-center">
            <h2>{user.name}</h2>

          </div>
        </div>
      ))}
    </div>
  </div>
      
  )
   }

export default UserList;
