import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import { getAllUser, getUserWithId } from "./api_fetch/user.jsx";
import User from "./pages/User.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Post from "./pages/Post.jsx";
import Tag from "./pages/Tag.jsx";
import Category from "./pages/Category.jsx";
import PostTag from "./pages/PostTag.jsx";
import Comment from "./pages/Comment.jsx";
import { getAllPost, getPostWithId } from "./api_fetch/post.jsx";
import { getAllTag, getTagWithId } from "./api_fetch/tag.jsx";
import { getAllPostTag, getPostTagWithId } from "./api_fetch/postTags.jsx";
import { getAllCategory, getCategoryWithId } from "./api_fetch/category.jsx";
import { getAllComment, getCommentWithId } from "./api_fetch/comment.jsx";
import UserWithId from "./pages/UserWithId.jsx";
import PostWithId from "./pages/PostWithId.jsx";
import TagWithId from "./pages/TagWithId.jsx";
import CategoryWithId from "./pages/CategoryWithId.jsx";
import PostTagWithId from "./pages/PostTagWithId.jsx";
import CommentWithId from "./pages/CommentWithId.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Link to={"/admin"}>Admin</Link>,
  },
  {
    path: "/admin",
    element: <App />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "user",
        element: <User />,
        loader: getAllUser,
      },
      {
        path: "user/:id",
        element: <UserWithId />,
        loader: getUserWithId,
      },
      {
        path: "post",
        element: <Post />,
        loader: getAllPost,
      },
      {
        path: "post/:id",
        element: <PostWithId />,
        loader: getPostWithId,
      },
      {
        path: "tag",
        element: <Tag />,
        loader: getAllTag,
      },
      {
        path: "tag/:id",
        element: <TagWithId />,
        loader: getTagWithId,
      },
      {
        path: "category",
        element: <Category />,
        loader: getAllCategory,
      },
      {
        path: "category/:id",
        element: <CategoryWithId />,
        loader: getCategoryWithId,
      },
      {
        path: "posttag",
        element: <PostTag />,
        loader: getAllPostTag,
      },
      {
        path: "posttag/:id",
        element: <PostTagWithId />,
        loader: getPostTagWithId,
      },
      {
        path: "comment",
        element: <Comment />,
        loader: getAllComment,
      },
      {
        path: "comment/:id",
        element: <CommentWithId/>,
        loader: getCommentWithId,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}></RouterProvider>
);

("/comments");
