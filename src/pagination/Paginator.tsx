import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import React from "react";

interface Props {
  pages: number;
  onPageChange: (page: number) => void;
  currentPage: number;
}

const Paginator = ({ pages, onPageChange, currentPage }: Props) => {
  const handlePageChange = (page: number) => {
    if (page > 0 && page <= pages) onPageChange(page);
  };

  const getVisiblePages = (total: number, current: number) => {
    const threshold = 5; // Define a threshold for displaying ellipses
    if (total < threshold) {
      // If the total number of pages is less than the threshold, display all pages
      const pages = [];
      for (let i = 1; i <= total; i++) {
        pages.push(i);
      }
      return pages;
    } else {
      if (current > 4 && current + 2 < total) {
        return [1, current - 1, current, current + 1, total];
      } else if (current > 4 && current + 2 >= total) {
        return [1, total - 3, total - 2, total - 1, total];
      } else {
        return [1, 2, 3, 4, 5, total];
      }
    }
  };

  const visiblePages = getVisiblePages(pages, currentPage);

  return (
    <div>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() => handlePageChange(currentPage - 1)}
            />
          </PaginationItem>
          {visiblePages.map((page: number, index: number) => (
            <React.Fragment key={page}>
              {index > 0 && page - visiblePages[index - 1] > 1 && (
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
              )}
              <PaginationItem>
                <PaginationLink
                  onClick={() => handlePageChange(page)}
                  className={currentPage === page ? "bg-blue-500" : ""}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            </React.Fragment>
          ))}
          <PaginationItem>
            <PaginationNext onClick={() => handlePageChange(currentPage + 1)} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default Paginator;
