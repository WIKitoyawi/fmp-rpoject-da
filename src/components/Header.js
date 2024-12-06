import React from "react";
import "../styles/header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Alterra</div>
      <nav>
        <ul>
          <li><a href="#donations">Пожертвования</a></li>
          <li><a href="#volunteering">Волонтёрства</a></li>
          <li><a href="#organizations">Организации</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
