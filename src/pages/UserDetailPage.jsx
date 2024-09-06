import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import LoadingSpinner from "../components/LoadingSpinner";

const UserDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        setUser(response.data);
      } catch (err) {
        setError("Failed to fetch user details");
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [id]);

  const updateUser = async () => {
    try {
      await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, user);
      alert("User updated successfully");
      navigate("/");
    } catch (err) {
      alert("Failed to update user");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  return (
    loading ? (
      <LoadingSpinner />
    ) : error ? (
      <div className="text-center mt-4 text-red-500">{error}</div>
    ) : (
      <div className="mt-6 bg-white p-6 shadow-md rounded-lg border border-[#D9E2EC]">
        <h2 className="text-2xl font-bold text-[#333333] mb-4">Edit User</h2>
        <div className="mb-4">
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-[#D9E2EC] rounded-md focus:outline-none focus:border-[#4A90E2]"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-[#D9E2EC] rounded-md focus:outline-none focus:border-[#4A90E2]"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            name="phone"
            value={user.phone}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-[#D9E2EC] rounded-md focus:outline-none focus:border-[#4A90E2]"
          />
        </div>
        <button
          onClick={updateUser}
          className="w-full bg-[#4A90E2] text-white py-2 rounded-md hover:bg-[#0073E6]"
        >
          Update User
        </button>
      </div>
    )
  );
};

export default UserDetailPage;
