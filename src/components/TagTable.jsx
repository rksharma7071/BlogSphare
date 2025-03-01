import React from "react";

function TagTable({tags}) {
  return (
    <>
      <h1>All Tags</h1>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>S.No.</th>
            <th>ID</th>
            <th>Name</th>
            {/* <th>Created At</th> */}
          </tr>
        </thead>
        <tbody>
          {tags.map((tag, index) => (
            <tr key={tag._id}>
              <td>{index + 1}</td>
              <td>{tag._id}</td>
              <td><strong>{tag.name}</strong></td>
              {/* <td>{new Date(tag.createdAt).toLocaleDateString()}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default TagTable;
