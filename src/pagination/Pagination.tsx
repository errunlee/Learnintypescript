import { IUser, useGetAllDataQuery } from "@/rtk-query/jsonPlaceholderApi";
import { useState } from "react";
import Paginator from "./Paginator";

const PaginationHere = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { isLoading, data, isError, isFetching } =
    useGetAllDataQuery(currentPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page); // Update current page when Paginator triggers a page change
  };

  const totalPages = 10; // Total number of pages (assuming it's known)

  return (
    <div>
      {isLoading ? <p>Loading</p> : null}
      {isError ? <p>Error</p> : null}
      {isFetching ? <p>Fetching new data</p> : null}
      {!isFetching &&
        !isLoading &&
        data?.map((user: IUser, i: number) => (
          <div className="flex flex-col items-center gap-2 p-3" key={i}>
            <p className="text-center text-3xl">{user.id}</p>
            <p className="text-xl text-slate-900">{user.title}</p>
            <p>{user.body}</p>
          </div>
        ))}
      {/* Pass necessary props to Paginator */}
      <Paginator
        pages={totalPages}
        onPageChange={handlePageChange}
        currentPage={currentPage}
      />
    </div>
  );
};

export default PaginationHere;
