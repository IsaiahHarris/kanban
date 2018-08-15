import React from 'react';
import logo from '../../logo.svg';
import './Header.css';

const Header = props=>{
  return(
    <header className="Header-header">
    <img src={logo} className="Header-logo" alt="logo" />
    <h1 className="Header-title">Welcome to KanBan</h1>
  </header>
  )
}

export default Header;