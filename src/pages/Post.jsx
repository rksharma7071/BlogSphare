import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import PostForm from "../components/PostForm";
import PostTable from "../components/PostTable";
import {getAllPost} from "../api_fetch/post";

function Post() {
  const loaderData = useLoaderData();
  const [posts, setPosts] = useState(loaderData.data || []);

  const refreshPosts = async () => {
    const updatedPostData = await getAllPost();
    setPosts(updatedPostData.data || []);
  };

  if (!posts) return <h1>Loading...</h1>;

  return (
    <div>
      <div>
        <PostForm refreshPosts={refreshPosts} />
        <PostTable posts={posts} />
      </div>
    </div>
  );
}

export default Post;
