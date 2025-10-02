import React from "react";
import { useLoaderData } from "react-router";
import User from "../User/User";

const Users = () => {
  const users = useLoaderData();

  return (
    <div>
      <h3>Users:</h3>
      {users.map((user, index) => (
        <User key={index} user={user}></User>
      ))}
    </div>
  );
};

export default Users;
