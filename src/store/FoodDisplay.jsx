import React from "react";
import { food_list } from "../assets/assets";
import FoodList from "../componeents/FoodList";
const FoodDisplay = (props) => {
  return (
    <div className="mt-10 pt-10 border-t-4">
      <h1 className="font-bold text-xl">Top Dishes Near Me</h1>
      <div className="grid grid-cols-4 col-span-4 gap-3 mt-4">
      {food_list.map((item, index) => {
        if (props.category==='ALL' || props.category === item.category ) {
        return (
          <FoodList
            key={index}
            id={item._id}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
          />
        );  
        }
        
      })}
      </div>
    </div>
  );
};

export default FoodDisplay;
