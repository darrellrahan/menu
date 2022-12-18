import React from "react";

const Menu = (prop) => {
  const { title, price, img, desc } = prop;
  return (
    <div className="menu">
      <img src={img} alt="img" />
      <div className="menu-text">
        <div className="menu-text-flex">
          <h3 className="menu-title">{title}</h3>
          <h3 className="price">${price}</h3>
        </div>
        <hr />
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Menu;
