import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import AllUsersCard from "./AllUsersCard";

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  console.log(users);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/users`)
      .then((data) => setUsers(data?.data));
  }, []);
  return (
    <>
      <h1 className="title my-10">All Users</h1>
      <div className="grid lg:grid-cols-3 gap-10">
        {users?.map((user) => (
          <AllUsersCard key={user._id} user={user} />
        ))}
      </div>
    </>
  );
};

export default AllUsers;
