import { Route, Routes } from "react-router-dom";
import { useEffect, Suspense, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChangedListener } from "./utils/firebase/firebase.utils";
import { createUserDocumentFromAuth } from "./utils/firebase/firebase.utils";
import { setCurrentUser } from "./store/features/current-user/current-user-slice";
import { setCartCountAndCartTotal } from "./store/features/cart/cart-slice";
import Spinner from "./components/spinner/spinner.component";
const Auth = lazy(() => import("./routes/auth/auth.component"));
const Home = lazy(() => import("./routes/home/home.component"));
const Navigation = lazy(() =>
  import("./routes/navigation/navigation.component")
);
const Shop = lazy(() => import("./routes/shop/shop.component"));
const Checkout = lazy(() => import("./routes/checkout/checkout.component"));

const App = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((store) => store.cart);
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });
    return unsubscribe;
  }, [dispatch]);
  useEffect(() => {
    dispatch(setCartCountAndCartTotal());
  }, [cartItems, dispatch]); // added the dispatch dependency to get rid of the "missing dependency" error
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route
          path='/'
          element={<Navigation />}
        >
          <Route
            index
            element={<Home />}
          />
          <Route
            path='shop/*'
            element={<Shop />}
          />
          <Route
            path='auth'
            element={<Auth />}
          />
          <Route
            path='checkout'
            element={<Checkout />}
          />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
