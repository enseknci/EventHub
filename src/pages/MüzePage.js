import React from "react";
import EventList from "../components/EventList";
import muzeData from "../Data/muzeData";

function MüzePage() {
  return (
    <>
      <div className="col-md-8">
        <EventList events={muzeData} />
      </div>
    </>
  );
}

export default MüzePage;
