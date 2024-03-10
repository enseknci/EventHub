import React from "react";
import Navbar from "./components/Navbar";
import EventHubImage from "./assets/EventHub.png";
import "./styles/navbar.css";
import Routes from "./components/Routes";
import SearchForm from "./components/SearchForm";
import "./styles/SearchForm.css";

const App = () => {
  const handleSearch = (formData) => {
    // Bu kısımda formData kullanılarak arama işlemi gerçekleştirilir
    console.log("Arama verisi:", formData);
  };

  return (
    <>
      <div>
        <Navbar logo={EventHubImage} />
      </div>

      <div>
        <SearchForm onSearch={handleSearch} />
      </div>
      <div>
        <Routes />
      </div>
    </>
  );
};

export default App;
