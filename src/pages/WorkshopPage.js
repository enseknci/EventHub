import React from "react";
import EventList from "../components/EventList";
import workshopData from "../Data/workshopData";

function WorkshopPage() {
  return (
    <>
      <div className="col-md-8">
        <EventList events={workshopData} />
      </div>
    </>
  );
}

export default WorkshopPage;
