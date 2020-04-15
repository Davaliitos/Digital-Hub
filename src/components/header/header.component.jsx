import React from 'react';
import { Link } from "react-router-dom";

import './header.style.scss';

const Header = () => (
    <div className="header">
        <div className="options">
            <Link className="option" to="/">
                COMPANY
            </Link>
            <Link className="option" to="/">
                HOME
            </Link>
            <Link className="option" to="/">
                TRANSFER
            </Link>
        </div>
        <Link className="logout" to="/">
            LOG OUT
        </Link>
    </div>
)

export default Header;