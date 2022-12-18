import React, { useState } from "react";
import Categories from "./Categories";
import menu from "../data";
import Menu from "./Menu";

const App = () => {
  const [currentCategory, setCurrentCategory] = useState("all");

  const category =
    currentCategory === "all"
      ? menu
      : menu.filter((e) => e.category === currentCategory);

  return (
    <div className="outer-container">
      <div className="inner-container">
        <div className="title">
          <h1>Menu</h1>
          <hr />
        </div>
        <Categories onClick={(ctg) => setCurrentCategory(ctg)} />
        <div className="menu-container">
          {category.map((e, i) => {
            const { title, price, img, desc } = e;
            return (
              <Menu key={i} title={title} price={price} img={img} desc={desc} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
