import { assets } from "../assets/assets";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { cartAction } from "../store/cart-slice";
import { useState } from "react";
function FoodList(props) {
  // const quantity = useSelector(state => state.cart.items);
  const [cartItems, setCartItems] = useState(0);
  const dispatch = useDispatch();
  const addCartToHandler = () => {
    dispatch(cartAction.addItemsToCart({
      id: props.id,
      name: props.name,
      image: props.image,
      price: props.price
    }));
    setCartItems(prev => prev + 1 );
  };
  const removeCartHandler = () => {
    dispatch(cartAction.removeItemsFromCart(props.id));
    setCartItems(prev => prev - 1 );

  };
  return (
    <div>
      <div
        className="cursor-pointer shadow-lg transition ease-in-out delay-150
        hover:-translate-y-1 hover:scale-110 duration-100"
      >
        <div className="relative">
          <img className="rounded-lg" src={props.image} alt={props.name} />
          {!cartItems ? (
            <motion.img
              className="absolute right-4 bottom-4 w-6 cursor-pointer"
              onClick={addCartToHandler}
              src={assets.add_icon_white}
              alt="Plus Icon"
              whileHover={{
                scale: 1.1,
                textShadow: "0px 0px 8px rgb(255,255,255)",
                boxShadow: "0px 0px 8px rgb(255,255,255)",
              }}
            />
          ) : (
            <div className="flex items-center absolute right-14 bottom-4 w-6 cursor-pointer gap-1 rounded-full">
              <img
                onClick={removeCartHandler}
                src={assets.remove_icon_red}
                alt="Plus Icon"
              />
              <p className="font-bold text-lg">{cartItems}</p>
              <img
                onClick={addCartToHandler}
                src={assets.add_icon_green}
                alt="Plus Icon"
              />
            </div>
          )}
        </div>
        <div className="px-2">
        <div className="flex justify-between pt-2 pb-2">
          <h1 className="font-bold text-lg">{props.name}</h1>
          <img className="w-16 h-6" src={assets.rating_starts} />
        </div>
        <p className="">{props.description}</p>
        <h3 className="text-orange-500 text-lg font-bold">${props.price}</h3>
      </div>
      </div>
    </div>
  );
}

export default FoodList;
