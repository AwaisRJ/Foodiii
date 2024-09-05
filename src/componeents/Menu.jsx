import React, { useState } from "react";
import { menu_list } from "../assets/assets";
function Menu(props) {
  return (
    <div className="flex flex-col pt-5 gap-5" id="explore-menu">
      <h1 className="font-bold text-2xl">Explore Our Menu!</h1>
      <p>
        Choose from a diverse menu featuring a delectable array of dises. Our
        mission <br />
        is to statisfy your craving and elevate your dinning experience.
      </p>
      <div className="grid cursor-pointer md:grid-cols-8 md:col-span-8 
      sm:grid-cols-4 sm:col-span-4 max-sm:grid-cols-4 max-sm:col-span-4">
       {menu_list.map((item, index)=> {
             return(
              <div className="flex flex-col items-center"
              onClick={()=> {props.setCategory(prev => prev===item.menu_name?'ALL': item.menu_name)}}
              key={index}>
                    <img className={props.category===item.menu_name?"size-9/12 rounded-full active:p-0 border-4 border-orange-400"
                      : "size-9/12 rounded-3xl"
                    } 
                  
                    src={item.menu_image} alt={item.menu_name} />
                    <p className="mt-3 text-lg text-slate-500">{item.menu_name}</p>
                </div>
             )
       })}
       </div>
    </div>
  );
}

export default Menu;
