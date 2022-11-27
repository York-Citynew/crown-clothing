const categoriesMapper = (categories) => {
  const categoriesMap = categories.reduce((acc, category) => {
    const { title, items } = category;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});
  return categoriesMap;
};

export default categoriesMapper;
