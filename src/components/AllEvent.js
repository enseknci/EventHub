// AllEvent.js

import React from "react";
import EventList from "./EventList";
import futbolData from "../Data/futbolData";
import muzeData from "../Data/muzeData";
import muzikData from "../Data/muzikData";
import sahneData from "../Data/sahneData";
import workshopData from "../Data/workshopData";

function AllEvent() {
  return (
    <div>
      <EventList events={futbolData} />
      <EventList events={muzeData} />
      <EventList events={muzikData} />
      <EventList events={sahneData} />
      <EventList events={workshopData} />
    </div>
  );
}

export default AllEvent;
