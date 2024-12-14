import React from "react";
import "../styles/header.css";
import Logo from "../assets/images/logo.svg";
import UserAvatar from "../assets/images/user-avatar.png"; // Add a placeholder avatar image

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={Logo} alt="Logo" className="logo-image" />
        <span className="logo-text">Alterra</span>
      </div>
      <nav className="navigation">
        <ul>
          <li><a href="#donations">Пожертвования</a></li>
          <li className="separator">|</li>
          <li><a href="#volunteering">Волонтёрства</a></li>
          <li className="separator">|</li>
          <li><a href="#organizations">Организации</a></li>
        </ul>
      </nav>
      <div className="user-avatar">
        <img src={UserAvatar} alt="User Avatar" className="avatar-image" />
      </div>
    </header>
  );
};

export default Header;