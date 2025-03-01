import React from 'react'

function CategoryTable({categories}) {
  return (
    <div>
      <h1>All Categories</h1>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>S.No.</th>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{category._id}</td>
              <td>
                <strong>{category.name}</strong>
              </td>
              <td>{category.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default CategoryTable