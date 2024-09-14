import React from "react";

const Notification = (props) => {
  return (
    <div className="w-full flex justify-end">
        
      <div className="flex gap-2 w-1/4 absolute 
      border p-2 bg-blue-100 font-bold mt-20 z-20">
        <h2 className="">{props.title}</h2>
        <p className="">{props.message}</p>
      </div>
    </div>
  );
};

export default Notification;
