import React from "react";
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavBarElements'
import { FaInfoCircle } from 'react-icons/fa'

const Navbar = () => {
  return (
      <>
        <Nav>
            <NavLink to="/">
                <h1>LOGO</h1>
            </NavLink>
            <Bars />
            <NavMenu>
                <NavLink to="/" activeStyle>
                    Home
                </NavLink>
                <NavLink to="/about" activeStyle>
                    About
                </NavLink>
                <NavLink to="/services" activeStyle>
                    Services
                </NavLink>
                <NavLink to="/contact" activeStyle>
                    Contact
                </NavLink>
                <NavLink to="/sign-up" activeStyle>
                    Sign Up
                </NavLink>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to="/signIn">Sign In</NavBtnLink>
            </NavBtn>
        </Nav>
      </>
  ) 
  
};

export default Navbar;
