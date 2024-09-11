import Home from "./componeents/Home";
import Cart from "./componeents/Cart/Cart";
import { useSelector } from "react-redux";
import Navbar from "./componeents/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./componeents/Footer";
import SignUp from "./componeents/SignUp";
import PlaceOrder from "./componeents/PlaceOrder";
function App() {
  const cartIsVisible = useSelector((state) => state.cart.cartIsVisible);
  const signInVisible = useSelector((state) => state.signin.signInVisible);
  return (
    <div>
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
    </div>
  );
}

export default App;
