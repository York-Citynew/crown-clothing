import { createSelector } from "selector";

const categoriesInputSelector = (store) => store.categories;

const categoriesMapper = createSelector(
  [categoriesInputSelector],
  (categories) => {
    const categoriesMap = categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {});
    return categoriesMap;
  }
);
// const categoriesMapper = (categories) => {
//   const categoriesMap = categories.reduce((acc, category) => {
//     const { title, items } = category;
//     acc[title.toLowerCase()] = items;
//     return acc;
//   }, {});
//   return categoriesMap;
// };

export default categoriesMapper;
