import React, { Fragment, useState } from "react";
import Hero from "./Hero";
import Menu from "./Menu";
import FoodDisplay from "../store/FoodDisplay";
import AppDownload from "./AppDownload";

const Home = () => {
  const [category, setCategory] = useState("ALL");

  return (
    <div className="m-auto w-[80%]">
      <Hero />
      <Menu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} setCategory={setCategory} />
      <AppDownload />
    </div>
  );
};

export default Home;
