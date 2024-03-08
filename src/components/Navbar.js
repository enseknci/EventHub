import React from "react";
import { Search } from "@mui/icons-material";

const Navbar = (props) => {
  return (
    <header>
      <nav>
        <div className="logo-list-container">
          <div className="logo-container">
            <img src={props.logo} alt="Event Hub" className="logo" />
          </div>
          <ul className="navbar">
            <li>
              <a href="#">Futbol</a>
            </li>
            <li>
              <a href="#">Müzik</a>
            </li>
            <li>
              <a href="#">Sahne</a>
            </li>
            <li>
              <a href="#">Müze</a>
            </li>
            <li>
              <a href="#">Workshop</a>
            </li>
          </ul>
        </div>
        <div className="search-container">
          <div className="search-box">
            <input type="text" placeholder="ETKİNLİK,MEKAN,ŞEHİR ARA..." />
            <button type="button">
              <Search />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
