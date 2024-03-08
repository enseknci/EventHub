import "../styles/EventCard.css";
import React, { useState } from "react";

const EventCard = ({ event }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };
  const handleImageClick = () => {};

  return (
    <div className="event-card-container">
      <div className="event-card">
        <img
          onClick={handleImageClick}
          src={event.image}
          alt={event.title}
          onLoad={handleImageLoad}
          style={{ display: imageLoaded ? "block" : "none" }}
        />

        <div className="event-details">
          <h2>{event.title}</h2>
          <p>{event.description}</p>
          <p>Date: {event.date}</p>
          <p>Location: {event.location}</p>
          <p>Category: {event.category}</p>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
