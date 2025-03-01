const getAllPost = async () => {
  try {
    const response = await fetch("/api/posts");
    if (!response.ok) throw new Error("Failed to fetch");
    const data = await response.json();
    return { data };
  } catch (error) {
    console.error(error);
    return [];
  }
};

const getPostWithId = async (postId) => {
  try {
    postId = postId.params.id;
    const response = await fetch(`/api/posts/${postId}`);
    if (!response.ok) throw new Error("Failed to fetch");
    const data = await response.json();
    return { data };
  } catch (error) {
    console.error(error);
    return null;
  }
};

export { getAllPost, getPostWithId };
