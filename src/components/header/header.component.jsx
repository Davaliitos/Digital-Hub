import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {selectCurrentUser} from '../../redux/user/user.selectors';
import {setCurrentUser} from '../../redux/user/user.actions';

import './header.style.scss';

const Header = ({currentUser, setCurrentUser}) => (
    <div className="header">
        <div className="options">
            <Link className="option" to="/">
                COMPANY
            </Link>
            {
                currentUser ? (
                    <Link className="option" to="/home">
                        HOME
                    </Link>
                )
                : null
            }
            {
                currentUser ? (
                    <Link className="option" to="/">
                        TRANSFER
                    </Link>
                )
                : null
            }            
        </div>
        {
            currentUser ? (
                <Link className="logout" to="/" onClick={() => setCurrentUser(null)}>
                    LOG OUT
                </Link>
            )
            : null
        }
        
    </div>
)

const mapStateToProps = createStructuredSelector({
    currentUser : selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
    setCurrentUser : user => dispatch(setCurrentUser(user))
  })

export default connect(mapStateToProps,mapDispatchToProps)(Header);