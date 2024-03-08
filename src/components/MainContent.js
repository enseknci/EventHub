import React from "react";
import EventCard from "./EventCard";
import data from "..//Data/Data.json"; // Veri dosyasını import edin

const MainContent = () => {
  return (
    <section>
      {data.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
};

export default MainContent;
