const getAllComment = async () => {
  try {
    const [commentsResponse, usersResponse, postsResponse] = await Promise.all([
      fetch("/api/comments"),
      fetch("/api/users/"),
      fetch("/api/posts/"),
    ]);

    if (!commentsResponse.ok || !usersResponse.ok || !postsResponse.ok)
      throw new Error("Failed to fetch");

    const commentsData = await commentsResponse.json();
    const usersData = await usersResponse.json();
    const postsData = await postsResponse.json();

    return { commentsData, usersData, postsData };
  } catch (error) {
    console.error(error);
    return { commentsData: [], usersData: [], postsData: [] };
  }
};

export default getAllComment;
