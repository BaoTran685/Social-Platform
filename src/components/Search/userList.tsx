import React from "react";
import { getAllUsers } from "@/app/actions/data/get-data/getUser";
import { Search_ContentObj } from "../Types/Search/search";

const UserList = async ({ users }: { users: Array<Search_ContentObj> }) => {
  const users_length = users.length;
  return (
    <div>
      {users_length === 0 ? (
        <p className="mt-4">No user found</p>
      ) : (
        <div className="flex flex-col mt-6">
          {users.map((user) => (
            <div key={user.id} className="flex flex-col">
              <div className="flex space-x-6 items-center">
                <h2>{user.username}</h2>
              </div>
            </div>
          ))}
        </div>
      )}

    </div>

  )
}

export default UserList;
