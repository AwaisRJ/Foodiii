import Home from "./componeents/Home";
import Cart from "./componeents/Cart/Cart";
import { useSelector } from "react-redux";
import Navbar from "./componeents/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menu from "./componeents/Menu";
import Footer from "./componeents/Footer";
function App() {
  const cartIsVisible = useSelector((state) => state.cart.cartIsVisible);
  return (
    <div className="m-auto w-[80%]">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={!cartIsVisible && <Home />} />
          <Route path="/footer" element = { <Footer /> } /> 
        </Routes>
      </Router>
      {cartIsVisible && <Cart />}
    </div>
  );
}

export default App;
