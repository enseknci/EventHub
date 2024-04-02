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
        <h1
          style={{
            marginTop: "20px",
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: "bold",
            fontSize: "2.4em",
            color: "#E53935", // Koyu bir kırmızı tonu
            textAlign: "center",
            textTransform: "uppercase", // Tüm harfleri büyük harfe çevir
            letterSpacing: "2px", // Harfler arası boşluğu artır
          }}
        >
          TÜM ETKİNLİKLER
        </h1>

        <AllEvent />
      </div>
    </>
  );
}

export default HomePage;
