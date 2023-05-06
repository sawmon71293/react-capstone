import React from 'react';
import { NavLink } from 'react-router-dom';
import { HiMicrophone } from 'react-icons/hi';
import { IoIosSettings } from 'react-icons/io';

const NavBar = () => (
  <div className="header">
    <NavLink to="/" className="back">&lt;</NavLink>
    <div>Sustainable Seafood</div>
    <div>
      <HiMicrophone className="mic" />
      <IoIosSettings />
    </div>
  </div>
);

export default NavBar;
