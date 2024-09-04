import React from "react";
import "../styles/EventList.css";
import EventIcon from "@mui/icons-material/Event";
import ScheduleIcon from "@mui/icons-material/Schedule";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const EventList = ({ events }) => {
  return (
    <div className="event-list">
      {events.map((event, index) => (
        <div key={index} className="event-box">
          <div className="event-content">
            <img src={event.image} alt={event.name} className="event-logo" />{" "}
            <div className="event-details">
              <h3 className="event-name">{event.name}</h3>
              <div className="event-info">
                <p>
                  <EventIcon /> {event.date}
                </p>{" "}
                <p>
                  <ScheduleIcon /> {event.time}
                </p>{" "}
                <p>
                  <LocationOnIcon /> {event.location}
                </p>{" "}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventList;
