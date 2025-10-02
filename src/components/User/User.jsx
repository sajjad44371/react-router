import React from "react";
import { Link } from "react-router";

const User = ({ user }) => {
  const { name, email, id } = user;
  return (
    <div className="border border-cyan-500 rounded-2xl p-5 mt-10">
      <h3>{name}</h3>
      <p>
        <small>{email}</small>
      </p>
      <Link to={`/users/${id}`}>Show details</Link>
    </div>
  );
};

export default User;
