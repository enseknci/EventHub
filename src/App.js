import React from "react";
import Navbar from "./components/Navbar"; // Navbar bileşenini import ediyoruz
import EventHubImage from "./assets/EventHub.png"; // EventHub.png dosyasını import ediyoruz
import "./styles/navbar.css";
import Routes from "./components/Routes"; // Routes bileşenini default export olarak import ediyoruz

const App = () => {
  return (
    <>
      <div>
        <Navbar logo={EventHubImage} />{" "}
        {/* Navbar bileşenini çağırıyoruz ve logo prop'unu EventHubImage ile geçiriyoruz */}
      </div>
      <Routes />
    </>
  );
};

export default App;
