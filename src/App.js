import Home from './componeents/Home';
import Cart from "./componeents/Cart/Cart";
import { useSelector } from "react-redux";
import Navbar from './componeents/Navbar'
function App() {
  const cartIsVisible = useSelector(state => state.cart.cartIsVisible);
  return (
    <div className='m-auto w-[80%]'>
       <Navbar />
       {cartIsVisible && <Cart />}
      {!cartIsVisible && <Home />}
    </div>
  );
}

export default App;
