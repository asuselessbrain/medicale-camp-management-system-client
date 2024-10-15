import PropTypes from "prop-types";

const PaginationDesign = ({
  pageNumbering,
  setCurrentPage,
  handleNextPage,
  handlePrevPage,
  currentPage,
}) => {
  return (
    <div className="container mx-auto px-4 my-10">
      <nav
        className="flex flex-row flex-nowrap justify-between md:justify-center items-center"
        aria-label="Pagination"
      >
        {/* <!-- Previous Page Button --> */}
        <p
          className="flex cursor-pointer w-10 h-10 mr-1 justify-center items-center rounded-full border border-gray-200 bg-white dark:bg-gray-800 text-black dark:text-white hover:border-gray-300 dark:hover:border-gray-600"
          title="Previous Page"
          onClick={handlePrevPage}
        >
          <span className="sr-only">Previous Page</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="block w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </p>
        {/* <!-- Page Buttons (1 to 5) --> */}

        {pageNumbering.map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`hidden ${
              parseInt(currentPage) === page ? "bg-blue-700 text-white" : " bg-white"
            } cursor-pointer md:flex w-10 h-10 mx-1 justify-center items-center hover:bg-blue-800 hover:text-white border-gray-200 rounded-full border  dark:bg-gray-700 text-black dark:text-white hover:border-gray-300 dark:hover:border-gray-600`}
            title={`page -${page + 1}`}
            disabled={currentPage === page}
          >
            {page + 1}
          </button>
        ))}
        {/* <!-- Next Page Button --> */}
        <p
          className="flex cursor-pointer w-10 h-10 ml-1 justify-center items-center rounded-full border border-gray-200 bg-white dark:bg-gray-800 text-black dark:text-white hover:border-gray-300 dark:hover:border-gray-600"
          onClick={handleNextPage}
          title="Next Page"
        >
          <span className="sr-only">Next Page</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="block w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </p>
      </nav>
    </div>
  );
};

PaginationDesign.propTypes = {
  pageNumbering: PropTypes.array.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  handleNextPage: PropTypes.func.isRequired,
  handlePrevPage: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
};


export default PaginationDesign;
