import React from "react";

import "./menu-item.style.scss";

const MenuCard = ({ title, content, children, onTop }) => (
  <div className="menu-item">
    {onTop ? (
      <div className="content">
        <h1 className="title">{title}</h1>
        <p className="main-content">{content}</p>
        <div className="children">{children}</div>
      </div>
    ) : (
      <div className="content">
        <div className="children">{children}</div>
        <div className="content">
          <h1 className="title">{title}</h1>
          <p className="main-content">{content}</p>
        </div>
      </div>
    )}
  </div>
);

export default MenuCard;
