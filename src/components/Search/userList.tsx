import React from "react";
import { Search_ContentObj } from "../Types/Search/search";

const UserList = async ({ users }: { users: Array<Search_ContentObj> }) => {
  const users_length = users.length;
  return (
    <div>
      {users_length === 0 ? (
        <p className="mt-4">No user found</p>
      ) : (
        <div className="flex flex-col space-y-6 mt-6">
          {users.map((user, index) => (
            <UserItem key={index} user={user} />
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