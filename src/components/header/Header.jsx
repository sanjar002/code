// import React from "react";

import { Link } from "react-router-dom";
// react icons
import { CiDark } from "react-icons/ci";
// images
import Logo from "../../assets/media/logotip.svg";
import "../../assets/style/Header.scss";
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const Header = () => {
 
  return (
    <>
      <header className="header" id="header">
        <div className="container">
          <div className="header-wrapper">
            <Link to="/">
            <div className="header-logo">
              <img className="images-logo" src={Logo} alt="" />
            </div>
            </Link>
            <div className="navbar">
              <ul className="df">
                <Link className="active" to="/">Главный</Link>
                <Link to="/comands">Команда</Link>
                <Link to="/Projects">Проекты</Link>
                <Link to="/Contact">Контакт</Link>
              </ul>
            </div>
            <div className="dark">
              <div className="color">
              <button className="dark__mood">
                <CiDark 
                className="ciDark"/>
              </button>
              
                </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
