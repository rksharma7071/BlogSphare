const getAllCategory = async () => {
  try {
    const response = await fetch("/api/categories");
    if (!response.ok) throw new Error("Failed to fetch");
    const data = await response.json();
    // console.log(data);
    return { data };
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default getAllCategory;
