import React from "react";
import { DataTable } from "./_components/data-table";

import data from "./data.json";

const Team = () => {
  return (
    <div className="p-4">
      <DataTable data={data} />
    </div>
  );
};

export default Team;
