import React from "react";
import { useLoaderData } from "react-router";

const UserDetails = () => {
  const user = useLoaderData();
  const { name, website } = user;
  return (
    <div>
      <h3>user details:</h3>
      <h2>{name}</h2>
      <p>{website}</p>
    </div>
  );
};

export default UserDetails;
