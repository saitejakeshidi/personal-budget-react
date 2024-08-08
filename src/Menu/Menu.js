import React from 'react';
//import './App.css';

import {
    Link
  } from "react-router-dom"
function Menu() {
  return (
    <nav 
    role = "navigation" 
    aria-label="Main menu"
     itemScope
     itemType="https://schema.org/SiteNavigationElement">
    <ul>
        <li><Link itemProp="url" to="/" aria-current="page">Home</Link></li>
        <li><Link itemProp="url" to="/about" aria-current="page">About</Link></li>
        <li><Link itemProp="url" to="/login" aria-current="page">Login</Link></li>
       
    </ul>
</nav>
  );
}

export default Menu;
