import React from "react";
import { Search } from "@mui/icons-material";

const Navbar = (props) => {
  return (
    <header>
      <nav>
        <div className="logo-list-container">
          <div className="logo-container">
            <a href="/">
              <img src={props.logo} alt="Event Hub" className="logo" />
            </a>
          </div>
          <ul className="navbar">
            <li>
              <a href="/futbol">Futbol</a>
            </li>
            <li>
              <a href="/müzik">Müzik</a>
            </li>
            <li>
              <a href="/sahne">Sahne</a>
            </li>
            <li>
              <a href="/müze">Müze</a>
            </li>
            <li>
              <a href="/workshop">Workshop</a>
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
