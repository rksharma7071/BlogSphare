import React from 'react'

function CommentTable({commentsData, getPostTitle, getUserName}) {
  return (
    <div>
      <h1>All Comments</h1>
      <table border={1} cellPadding={10}>
        <thead>
          <tr>
            <th>S.No.</th>
            <th>ID</th>
            <th>Username</th>
            <th>Post Name</th>
            <th>Content</th>
          </tr>
        </thead>
        <tbody>
          {commentsData.map((comment, index) => (
            <tr key={comment._id}>
              <td>{index + 1}</td>
              <td>{comment._id}</td>
              <td>{getUserName(comment.user_id)}</td>
              <td>{getPostTitle(comment.post_id)}</td>
              <td>{comment.content}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default CommentTable