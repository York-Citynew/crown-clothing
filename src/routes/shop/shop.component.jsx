import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../../components/category/category.component";
import "./shop.styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../store/features/categories/categories-slice";
import { setCartCountAndCartTotal } from "../../store/features/cart/cart-slice";

const Shop = () => {
  const { cartItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]); //just to get rid of the 'missing dependency' error
  useEffect(() => {
    dispatch(setCartCountAndCartTotal());
  }, [cartItems, dispatch]); // added the dispatch dependency to get rid of the "missing dependency" error
  return (
    <Routes>
      <Route
        index
        element={<CategoriesPreview />}
      />
      <Route
        path=':category'
        element={<Category />}
      />
    </Routes>
  );
};
export default Shop;

// import { collection } from "firebase/firestore";
// import PRODUCTS from "../SHOP_DATA";
// import { createCollectionAndDocumnets } from "../utils/firebase/firebase.utils";
// useEffect(() => {
//   createCollectionAndDocumnets("categories", PRODUCTS);
// }, []);
