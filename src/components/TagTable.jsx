import React from "react";
import { Link } from "react-router-dom";
import { deleteUserWithId } from "../api_fetch/user";
import { deleteTagWithId } from "../api_fetch/tag";

function TagTable({ refreshTags, tags }) {
  const handleDeleteTag = async (id) => {
    if (confirm("Do you want to delete tag?")) {
      try {
        const response = await deleteTagWithId(id);
        alert(response.data.message);
        await refreshTags();
      } catch (error) {
        console.error("Error deleting tag:", error);
      }
    }
  };

  return (
    <>
      <h1>All Tags</h1>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>S.No.</th>
            <th>ID</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tags.map((tag, index) => (
            <tr key={tag._id}>
              <td>{index + 1}</td>
              <td>{tag._id}</td>
              <td>
                <strong>
                  <Link to={tag._id}>{tag.name}</Link>
                </strong>
              </td>
              <td>
                <button onClick={() => handleDeleteTag(tag._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default TagTable;
