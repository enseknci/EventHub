import React from "react";
import Slider from "../components/Slider"; // Slider bileşenini import ediyoruz
import AllEvent from "../components/AllEvent";

function HomePage() {
  return (
    <>
      <div>
        <Slider /> {/* Slider bileşenini burada kullanıyoruz */}
      </div>
      <div>
        <h2
          style={{
            fontFamily: '"Roboto Concensed", serif !important',
            fontWeight: "100 !important",
            color: "red",
            textAlign: "center",
          }}
        >
          TÜM ETKİNLİKLER
        </h2>
        <AllEvent />
      </div>
    </>
  );
}

export default HomePage;
