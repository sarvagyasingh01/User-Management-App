import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const UserList = ({ users, setUsers }) => {
  const deleteUser = async (id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      setUsers(users.filter((user) => user.id !== id));
    } catch (err) {
      alert("Failed to delete user");
    }
  };

  return (
    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {users.map((user) => (
        <div key={user.id} className="p-6 bg-white shadow-sm rounded-lg border border-[#D1DCE5]">
          <h2 className="text-xl font-semibold text-[#2C3E50] mb-2">{user.name}</h2>
          <p className="text-[#2C3E50] mb-1">Email: {user.email}</p>
          <p className="text-[#2C3E50] mb-3">Phone: {user.phone}</p>
          <div className="flex justify-between">
            <Link to={`/user/${user.id}`} className="text-[#4A90E2] hover:text-[#1C6C9A]">
              Edit
            </Link>
            <button
              onClick={() => deleteUser(user.id)}
              className="text-[#4A90E2] hover:text-[#1C6C9A]"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserList;
