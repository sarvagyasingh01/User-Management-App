import React, { useState } from "react";

const UserForm = ({ onAddUser }) => {
  const [user, setUser] = useState({ name: "", email: "", phone: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddUser(user);
    setUser({ name: "", email: "", phone: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 bg-white p-6 shadow-sm rounded-lg border border-[#D1DCE5]">
      <h2 className="text-2xl font-bold text-[#2C3E50] mb-4">Add New User</h2>
      <div className="mb-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={user.name}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-[#D1DCE5] rounded-md focus:outline-none focus:border-[#4A90E2]"
        />
      </div>
      <div className="mb-4">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-[#D1DCE5] rounded-md focus:outline-none focus:border-[#4A90E2]"
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={user.phone}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-[#D1DCE5] rounded-md focus:outline-none focus:border-[#4A90E2]"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-[#4A90E2] text-white py-2 rounded-md hover:bg-[#1C6C9A]"
      >
        Add User
      </button>
    </form>
  );
};

export default UserForm;
