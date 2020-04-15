import React from "react";
import { Link, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCurrentUser } from "../../redux/user/user.selectors";
import { setCurrentUser } from "../../redux/user/user.actions";

import "./header.style.scss";

const Header = ({ currentUser, setCurrentUser }) => {

  let location = useLocation();
  let pathName = location.pathname;

  return (
    <div className="header">
      <div className="options">
        <Link className="option" to="/">
          COMPANY
        </Link>
        {currentUser ? (
          <Link className={`${pathName === '/' ? 'enabled' : ''} option`} to="/">
            HOME
          </Link>
        ) : null}
        {currentUser ? (
          <Link className={`${pathName === '/transfer' ? 'enabled' : ''} option`} to="/transfer">
            TRANSFER
          </Link>
        ) : null}
      </div>
      {currentUser ? (
        <Link className="logout" to="/" onClick={() => setCurrentUser(null)}>
          LOG OUT
        </Link>
      ) : null}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
