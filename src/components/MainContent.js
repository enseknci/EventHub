import React from "react";
import EventCard from "./EventCard"; // EventCard bileşenini içeri aktarın
import data from "../Data/FutbolData.json"; // Veri dosyasını import edin

const MainContent = () => {
  return (
    <section>
      {data.matches.map((match) => (
        <EventCard key={match.id} match={match} /> // matches yerine match kullanılmalı
      ))}
    </section>
  );
};

export default MainContent;
