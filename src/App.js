import Home from "./componeents/Home";
import Cart from "./componeents/Cart/Cart";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./componeents/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./componeents/Footer";
import SignUp from "./componeents/SignUp";
import PlaceOrder from "./componeents/PlaceOrder";
import { Fragment, useEffect } from "react";
import { SendCartData, FetchCartData } from "./store/cart-thunks";
import Notification from "./componeents/Notification";
let isIntital = true;
function App() {
  const cartIsVisible = useSelector((state) => state.cart.cartIsVisible);
  const signInVisible = useSelector((state) => state.signin.signInVisible);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.ui.notification);
  useEffect(() => {
    dispatch(FetchCartData());
  }, [dispatch])
  
  useEffect(() => {
    // const SendCartData = async () => {
    //   const response = await fetch(
    //     "https://food-ba60e-default-rtdb.firebaseio.com/cart.json",
    //     {
    //       method: "PUT",
    //       body: JSON.stringify(cart),
    //     }
    //   );
    //   if (!response.ok) {
    //     throw new Error("Ooooops Data Sending Failed..");
    //   }
    //   console.log("called");
    // };
    // try {
    //   SendCartData();
    // } catch (error) {
    //   throw new Error("Ooooops Data Sending Failed..");
    // }
    if(isIntital){
      isIntital = false;
      return;
    }
    dispatch(SendCartData(cart));
  }, [cart], dispatch);

  return (
    <Fragment>
      {notification && <Notification 
      status = {notification.status}
      title = {notification.title}
      message = {notification.message}
      />}
      <Router>
        <Navbar />
        {signInVisible && <SignUp />}
        <Routes>
          <Route path="/" element={!cartIsVisible && <Home />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/cart" element={cartIsVisible && <Cart />} />
        </Routes>
      </Router>
      <Footer />
    </Fragment>
  );
}

export default App;
