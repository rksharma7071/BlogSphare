const getAllUser = async () => {
  try {
    const response = await fetch("/api/users");
    if (!response.ok) throw new Error("Failed to fetch");
    const data = await response.json();
    return { data };
  } catch (error) {
    console.error(error);
    return [];
  }
};

const getUserWithId = async (userId) => {
  try {
    userId = userId.params.id;
    const response = await fetch(`/api/users/${userId}`);
    if (!response.ok) throw new Error("Failed to fetch");
    const data = await response.json();
    return { data };
  } catch (error) {
    console.error(error);
    return null;
  }
};
const deleteUserWithId = async (userId) => {
  try {
    const response = await fetch(`/api/users/${userId}`, {
      method: "DELETE",
    });

    if (!response.ok) throw new Error("Failed to delete user");
    const data = await response.json();
    return { data };

  } catch (error) {
    console.error("Error deleting user:", error);
    return null;
  }
};


export { getAllUser, getUserWithId, deleteUserWithId };
