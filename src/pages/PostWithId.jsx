import React from "react";
import { useLoaderData } from "react-router-dom";

function PostWithId() {
  const post = useLoaderData();
  console.log(post.data);
  const {
    _id,
    author_id,
    category_id,
    content,
    featured_image,
    status,
    title,
  } = post.data;
  return (
    <div>
      <h1>{title}</h1>
      <p>Content: {content}</p>
      {/* <p>{author_id?.username}</p> */}
      <p>
        Status:
        <span
          style={{ backgroundColor: status === "published" ? "green" : "red" }}
        >
          {status}
        </span>
      </p>

      <p></p>
    </div>
  );
}

export default PostWithId;
