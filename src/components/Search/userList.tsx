'use client'
import { Search_ContentObj } from "../Types/Search/search";
import React from "react";
import { useRouter } from "next/navigation";

const UserList = ({ users }: { users: Array<Search_ContentObj> }) => {
  const users_length = users.length;
  const router = useRouter();

  const handleClick = (userId: string) => {
    const encodedUserId = encodeURI(userId);
    router.push(`/user?i=${encodedUserId}`);
  };

  return (
    <div>
      {users_length === 0 ? (
        <p className="mt-4">No user found</p>
      ) : (
        <div className="flex flex-col mt-6">
          {users.map((user) => (
            <div key={user.id} className="flex flex-col">
              <div className="flex space-x-6 items-center">
              <button onClick={() => handleClick(user.id)}>{user.username}</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default UserList;

// note that this user object does exclude some of the properties from the Model User from prisma
// it only has the neccessary properties
const UserItem = ({ user }: { user: Search_ContentObj }) => {
  return (
    <div>
      {user.username}
    </div>
  )
}