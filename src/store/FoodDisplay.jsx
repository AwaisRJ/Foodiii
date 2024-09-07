import React from "react";
import { food_list } from "../assets/assets";
import FoodList from "../componeents/FoodList";
const FoodDisplay = (props) => {
  return (
    <div className="mt-10 pt-10 border-t-4">
      <h1 className="font-bold text-xl">Top Dishes Near Me</h1>
      <div
        className="grid lg:grid-cols-4 lg:col-span-4 
      md:sm:grid-cols-3 md:sm:col-span-3 
      max-sm:grid-cols-2 max-sm:col-span-2 
      gap-3 mt-4"
      >
        {food_list.map((item, index) => {
          if (props.category === "ALL" || props.category === item.category) {
            return (
              <FoodList
                key={index}
                id={item.id}
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
