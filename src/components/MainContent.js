import React from "react";
import EventCard from "./EventCard";
import data from "../Data/FutbolData.json";

const MainContent = () => {
  return (
    <section>
      {data.matches.map((match) => (
        <EventCard key={match.id} match={match} />
      ))}
    </section>
  );
};

export default MainContent;
