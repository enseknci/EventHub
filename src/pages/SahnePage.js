import React from "react";
import sahneData from "../Data/sahneData";
import EventList from "../components/EventList";

function SahnePage() {
  return (
    <>
      <div className="col-md-8">
        <EventList events={sahneData} />
      </div>
    </>
  );
}

export default SahnePage;
