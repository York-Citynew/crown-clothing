import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/home.component";
import Shop from "./routes/shop/shop.component";
import Navigation from "./routes/navigation/navigation.component";
import Auth from "./routes/auth/auth.component";
import Checkout from "./routes/checkout/checkout.component";
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user });
    });
    return unsubscribe;
  }, [dispatch]); //just to get rid of "missing dependency" error

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
