import React from "react";
import menu from "../data";

const Categories = (prop) => {
  const categories = ["all"];

  menu.forEach(
    (e) => !categories.includes(e.category) && categories.push(e.category)
  );

  return (
    <div>
      {categories.map((ctg, index) => (
        <button key={index} onClick={() => prop.onClick(ctg)}>
          {ctg}
        </button>
      ))}
    </div>
  );
};

export default Categories;
