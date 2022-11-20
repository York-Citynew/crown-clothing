// import { collection } from "firebase/firestore";
import { useEffect } from "react";
import { createContext, useState } from "react";
// import PRODUCTS from "../SHOP_DATA";
// import { createCollectionAndDocumnets } from "../utils/firebase/firebase.utils";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

export const CategoriesContext = createContext({
  categoriesMap: {},
});
export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  // useEffect(() => {
  //   createCollectionAndDocumnets("categories", PRODUCTS);
  // }, []);
  useEffect(() => {
    const getCategories = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoryMap);
    };
    getCategories();
  }, []);
  const value = {
    categoriesMap,
  };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
