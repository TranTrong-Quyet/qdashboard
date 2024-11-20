import React from "react";

import { useGetCustomersQuery } from "@/store/api";
import { columns } from "./column";
import { DataTable } from "./data-table";

const Customer = () => {
  const { data, status, isLoading, isFetching, isError } =
    useGetCustomersQuery();

  if (isLoading) {
    return <div>Loading...</div>; // Show a loader while data is being fetched
  }
  if (isError) {
    return <div>Error loading data.</div>; // Show an error message
  }
  console.log(data);

  return (
    <div>
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={data} />
        {/* ahah */}
      </div>
    </div>
  );
};

export default Customer;
