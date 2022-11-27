import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Home from "./routes/home/home.component";
import Shop from "./routes/shop/shop.component";
import Navigation from "./routes/navigation/navigation.component";
import Auth from "./routes/auth/auth.component";
import Checkout from "./routes/checkout/checkout.component";
import { onAuthStateChangedListener } from "./utils/firebase/firebase.utils";
import { createUserDocumentFromAuth } from "./utils/firebase/firebase.utils";
import { setCurrentUser } from "./store/features/current-user/current-user-slice";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });
    return unsubscribe;
  }, [dispatch]);

  return (
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
  );
};

export default App;
