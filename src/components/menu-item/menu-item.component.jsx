import React from 'react';

import './menu-item.style.scss';

const MenuCard = ({title, content, children}) => (
    <div className="menu-item">
        <div className="children">
        {children}
        </div>
        <div className="content">
            <h1 className="title">{title}</h1>
            <p className="main-content">{content}</p>
        </div>
    </div>
)

export default MenuCard;