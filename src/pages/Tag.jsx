import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import TagTable from "../components/TagTable";
import TagForm from "../components/TagForm";
import getAllTag from "../api_fetch/tag";

function Tag() {
  const loaderData = useLoaderData();
  const [tags, setTags] = useState(loaderData.data || []);

  const refreshTags = async () => {
    const updatedTagData = await getAllTag();
    setTags(updatedTagData.data || []);
  };

  if (!tags.length) return <h1>Loading...</h1>;

  return (
    <div>
      <TagForm refreshTags={refreshTags} />
      <TagTable tags={tags} />
    </div>
  );
}

export default Tag;
