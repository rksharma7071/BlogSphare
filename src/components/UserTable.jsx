import React from "react";
import { Link } from "react-router-dom";

function UserTable({ users }) {
  return (
    <>
      <h1>All Users</h1>
      <table border={1} cellPadding="10">
        <thead>
          <tr>
            <th>S.No.</th>
            {/* <th>ID</th> */}
            <th>Username</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {users && users.length > 0 ? (
            users.map((user, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                {/* <td>{user._id}</td> */}
                <td>
                  <strong><Link to={user._id}>{user.username.toLowerCase()}</Link></strong>
                </td>
                <td>{user.first_name} </td>
                <td>{user.last_name} </td>
                <td>{user.email}</td>
                <td>
                  {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                </td>
              </tr>
            ))
          ) : (
            <p>No users found</p>
          )}
          <tr></tr>
        </tbody>
      </table>
    </>
  );
}

export default UserTable;
