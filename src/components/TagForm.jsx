import axios from "axios";
import React, { useState } from "react";

function TagForm({ refreshTags }) {
  const [tag, setTag] = useState({
    name: "",
  });

  const handleChange = (e) => {
    setTag({ ...tag, [e.target.name]: e.target.value });
  };

  const handleTagCreate = async (tag) => {
    try {
      await axios.post("/api/tags", tag);
      await refreshTags();
      setTag({
        name: "",
      });
    } catch (error) {
      console.error(
        "Error creating tag:",
        error.response?.data?.msg || error.message
      );
    }
  };
  const handleTagFormSubmit = (e) => {
    e.preventDefault();
    handleTagCreate(tag);
  };

  return (
    <div>
      <h1>Create New Tag</h1>
      <form onSubmit={handleTagFormSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleChange}
            value={tag.name}
            required
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default TagForm;
