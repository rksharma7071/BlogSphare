import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <div>
        <Link to={"/admin/user"}>User</Link>
      </div>
      <div>
        <Link to={"/admin/post"}>Post</Link>
      </div>
      <div>
        <Link to={"/admin/tag"}>Tag</Link>
      </div>
      <div>
        <Link to={"/admin/category"}>Category</Link>
      </div>
      {/* <div>
        <Link to={"/admin/posttag"}>Post Tag</Link>
      </div> */}
      <div>
        <Link to={"/admin/comment"}>Comment</Link>
      </div>
    </div>
  );
}

export default Header;
