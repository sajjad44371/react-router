import React, { use } from "react";

const Posts = ({ postsPromise }) => {
  const posts = use(postsPromise);
  console.log(posts);

  return (
    <div>
      <h2>This is Posts</h2>
    </div>
  );
};

export default Posts;
