import React, { useState } from 'react';
import logo from '../../../image/logo.png'
import { Nav, Navbar } from 'react-bootstrap';
import './Header.css'
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Button from '@mui/material/Button';
const Header = () => {
    const { user, logOut} = useAuth();
    const [sticky, setSticky] = useState(false);

    const activeNav = {
        color: "rgb(255 255 255)",
        padding: "8px 24px 6px",
        backgroundColor: "#4d75d1",
        boxShadow: "0px 1px 2px 0px #0e0e0ea3"
    }
    window.onscroll = () => {

        if(window.scrollY > 10){
            setSticky(true);
        }
        else{
            setSticky(false);
        }
    };
    return (
        <div className="Header">
            <div className="header-div">
            <Navbar fixed="top" className={`header-nav  d-flex ${sticky ? "nav-active" : ""}`} expand="lg">
                    <Navbar.Brand className="header-logo-div" href="/">
                        <img className="logo" src={logo} alt="" />
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto nav">
                        {!user.email && <NavLink to="/home" activeStyle={activeNav}>HOME</NavLink>}
                        <NavLink to="/about" activeStyle={activeNav}>ABOUT</NavLink>
                        {user.email && <NavLink to="/dashboard" activeStyle={activeNav}>DASHBOARD</NavLink>}
                        <NavLink to="/Explore" activeStyle={activeNav}>EXPLORE</NavLink>
                        {!user.email && <NavLink to="/registration" activeStyle={activeNav}>REGISTRATION</NavLink>}
                        {
                            user?.email ? 
                            <Button onClick={logOut} sx={{ml:3, mr:2,borderRadius: '24px'}} color="success" variant="contained">LOGOUT</Button>
                            :
                            <NavLink to="/login" activeStyle={activeNav}>LOGIN</NavLink>
                        }
                    </Nav>
                    </Navbar.Collapse>
            </Navbar>
            </div>
        </div>
    );
};

export default Header;