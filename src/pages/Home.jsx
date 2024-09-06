import React, { useState, useEffect } from "react";
import axios from "axios";
import UserList from "../components/UserList";
import UserForm from "../components/UserForm";
import LoadingSpinner from "../components/LoadingSpinner";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        setUsers(response.data);
      } catch (err) {
        setError("Failed to fetch users");
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const addUser = async (user) => {
    try {
      const response = await axios.post("https://jsonplaceholder.typicode.com/users", user);
      setUsers([...users, response.data]);
    } catch (err) {
      alert("Failed to create user");
    }
  };

  return (
    <div>
      {loading ? (
        // <div>Loading...</div>
        <LoadingSpinner />
      ) : error ? (
        <div>{error}</div>
      ) : (
        <>
          <UserForm onAddUser={addUser} />
          <UserList users={users} setUsers={setUsers} />
        </>
      )}
    </div>
  );
};

export default Home;
