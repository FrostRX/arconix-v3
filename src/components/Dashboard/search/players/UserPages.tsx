import React from "react";

interface Props {
  page: number;
  totalPages: number;
  searchResults: any;
  handleNextPage: () => void;
  handlePrevPage: () => void;
}

export default function UserPages({
  page,
  totalPages,
  searchResults,
  handleNextPage,
  handlePrevPage,
}: Props) {
  return (
    <div className="flex justify-center mt-5">
      <div className="flex flex-col gap-2 items-center">
        <div className="flex gap-2">
          <button
            className="w-14 h-8 rounded-md bg-secondary text-white text-opacity-75 px-4 py-2 flex items-center justify-center hover:bg-primary hover:text-white cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-secondary disabled:hover:text-opacity-75"
            onClick={handlePrevPage}
            disabled={page === 1}
          >
            Prev
          </button>
          <button
            className="w-14 h-8 rounded-md bg-secondary text-white text-opacity-75 px-4 py-2 flex items-center justify-center hover:bg-primary hover:text-white cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-secondary disabled:hover:text-opacity-75"
            onClick={handleNextPage}
            disabled={page === totalPages}
          >
            Next
          </button>
        </div>

        <span className="text-white text-opacity-75">
          {searchResults.length > 0
            ? `Showing ${page * 10 - 9} to ${
                page * 10 > searchResults.length
                  ? searchResults.length
                  : page * 10
              }`
            : ""}
        </span>
      </div>
    </div>
  );
}
