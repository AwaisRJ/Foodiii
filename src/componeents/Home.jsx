import React, { Fragment, useState } from "react";
import Hero from "./Hero";
import Menu from "./Menu";
import FoodDisplay from "../store/FoodDisplay";

const Home = () => {
  const [category, setCategory] = useState("ALL");

  return (
    <Fragment>
      <Hero />
      <Menu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} setCategory={setCategory} />
    </Fragment>
  );
};

export default Home;
