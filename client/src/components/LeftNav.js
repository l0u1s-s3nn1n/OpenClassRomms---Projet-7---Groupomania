import React from 'react';
import { NavLink } from 'react-router-dom'

const LeftNav = () => {
    return (
        <nav className="left-nav-container">
      <div className="icons">
        <div className="icons-bis">
          <NavLink to='/' >
            <img src="./img/icons/home.svg" alt="home"/>
          </NavLink>
          <br/>
          <NavLink to='/trending' >
            <img src="./img/icons/rocket.svg" alt="trending"/>
          </NavLink>
          <br/>
          <NavLink to='/profil'>
            <img src="./img/icons/user.svg" alt="profil"/>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default LeftNav;