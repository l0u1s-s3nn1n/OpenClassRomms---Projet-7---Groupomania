import React from "react";
import Log from "../components/Log";
const Profil = () => {
  return (
    <div className="profil-page">
      <div className="log-container">
        <Log />
        <div className="img-container">
          <img src="./img/icon-left-font.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Profil;
