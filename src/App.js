import Home from "./componeents/Home";
import Cart from "./componeents/Cart/Cart";
import { useSelector } from "react-redux";
import Navbar from "./componeents/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./componeents/Footer";
import SignUp from "./componeents/SignUp";
function App() {
  const cartIsVisible = useSelector((state) => state.cart.cartIsVisible);
  const signInVisible = useSelector((state) => state.signin.signInVisible);
  return (
    <div className="">
      <Router>
        <Navbar />
       {signInVisible && <SignUp />}
        <Routes>
          <Route path="/" element={!cartIsVisible && <Home />} />
        </Routes>
      </Router>
      <Footer />
      {cartIsVisible && <Cart />}
    </div>
  );
}

export default App;
