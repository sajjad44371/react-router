import React from "react";
import { useLoaderData } from "react-router";

const User = () => {
  const users = useLoaderData();
  console.log(users);
  return (
    <div>
      <h3>Users:</h3>
    </div>
  );
};

export default User;
