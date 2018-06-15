import React from "react";
import logoWhite from "../../styles/img/logo-white.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo-box">
        <img className="header__logo" src={logoWhite} alt="logo" />
      </div>
      <div className="header__text">
        <h1 className="heading-primary">
          <span className="heading-primary--main">Outdoors </span>
          <span className="heading-primary--sub">is where life happens</span>
        </h1>
        <a href="/" className="btn btn--white btn--animated">
          Discover our tours
        </a>
      </div>
    </header>
  );
};
export default Header;
