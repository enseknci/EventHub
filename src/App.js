import React from "react";
import Navbar from "./components/Navbar";
import EventHubImage from "./assets/EventHub.png";
import "./styles/navbar.css";
import Routes from "./components/Routes";
import SearchForm from "./components/SearchForm";
import "./styles/SearchForm.css";
import Footer from "./components/Footer";
import "./styles/Footer.css";

const App = () => {
  const handleSearch = (formData) => {
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
      <div>
        <Footer />
      </div>
    </>
  );
};

export default App;
