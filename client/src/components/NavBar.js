import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { UidContext } from "./AppContext";
import Logout from "./Log/Logout";

const NavBar = () => {
  const uid = useContext(UidContext);
  const userData = useSelector((state) => state.userReducer);
  return (
    <nav>
      <div className="nav-container">
        <div className="logo">
          <NavLink  to="/">
            <div className="logo">
              <img src="./logo/icon-left-font-monochrome-white" alt="" />
              <h3>Groupomania</h3>
            </div>
          </NavLink>
        </div>
        {uid ? (
          <ul>
            <li></li>
            <li className="welcome">
              <NavLink  to="/profil">
                <h5>Bienvenue {userData.pseudo}</h5>
              </NavLink>
            </li>
           <Logout />
          </ul>
        ) : (
          <ul>
            <li></li>
            <li>
              <NavLink to="/profil">
                <img src="./img/icons/login.svg" alt="login"></img>
              </NavLink>
            </li>
          </ul>
        )}
      </div>
    </nav>
  )
}

export default NavBar;
