import React from "react";
import EventList from "../components/EventList";

import muzikData from "../Data/muzikData";

function MüzikPage() {
  return (
    <>
      <div className="col-md-8">
        <EventList events={muzikData} />
      </div>
    </>
  );
}

export default MüzikPage;
