import React from "react";
import EventList from "../components/EventList";
import futbolData from "../Data/futbolData";

function FutbolPage() {
  return (
    <div className="col-md-8">
      <EventList events={futbolData} />
    </div>
  );
}

export default FutbolPage;
