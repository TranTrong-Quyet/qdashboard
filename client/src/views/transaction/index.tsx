import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Header from "@/components/Header";
import { useGetTransactionsQuery } from "@/store/api";

const Transaction = () => {
  // value to be set to the backend
  // State for pagination, sorting, and search
  const [paginationModel, setPaginationModel] = useState({
    page: 0, // DataGrid uses 0-based indexing for pages
    pageSize: 18,
  });
  const [sort, setSort] = useState({});
  const [search, setSearch] = useState("");

  // Fetch data from the backend
  const { data, isLoading, isError, isFetching } = useGetTransactionsQuery({
    page: paginationModel.page + 1, // Adjust for backend 1-based indexing
    pageSize: paginationModel.pageSize,
    sort: JSON.stringify(sort),
    search,
  });
  console.log(data);

  // set up table
  const columns = [
    {
      field: "_id",
      headerName: "ID",
      flex: 1,
    },
    {
      field: "userId",
      headerName: "User ID",
      flex: 1,
    },
    {
      field: "createdAt",
      headerName: "Created at",
      flex: 1,
    },
    {
      field: "products",
      headerName: "Product",
      flex: 1,
      sortable: false,
      renderCell: (params) => params.value.length,
    },
    {
      field: "cost",
      headerName: "Cost",
      flex: 1,
      renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
    },
  ];

  // Handle pageSize change
  const handlePageSizeChange = (newPageSize: number) => {
    setPaginationModel((prev) => ({ ...prev, pageSize: newPageSize }));
  };

  if (isLoading) {
    return (
      <div className="h-screen w-full bg-white text-2xl font-medium items-center align-center">
        Loading data
      </div>
    );
  }
  return (
    <div className="h-screen p-4 sm:p-5 lg:p-7">
      <Header title={"Transaction"} description={"Transaction data here"} />
      <div className="flex">
        <DataGrid
          loading={isLoading || isFetching}
          getRowId={(row) => row._id}
          rows={data?.transactions || []}
          columns={columns}
          rowCount={data?.total || 0}
          pageSizeOptions={[5, 10, 25, 50]}
          paginationMode="server"
          sortingMode="server"
          paginationModel={paginationModel}
          onPaginationModelChange={(newModel) => setPaginationModel(newModel)}
          onSortModelChange={(newSortModel) => setSort(newSortModel[0] || {})}
        />
      </div>
    </div>
  );
};
export default Transaction;
