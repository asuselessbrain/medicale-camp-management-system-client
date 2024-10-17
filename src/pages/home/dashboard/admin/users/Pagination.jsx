import PropTypes from "prop-types"

const Pagination = ({numberOfPageArray, setCurrentPage, currentPage, handleNextPage, handlePrevPage }) => {
  return (
    <nav
      className="flex items-center gap-x-1 justify-center my-6"
      aria-label="Pagination"
    >
      <button
        type="button"
        onClick={handlePrevPage}
        className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
        aria-label="Previous"
        disabled={currentPage === 0}
      >
        <svg
          className="shrink-0 size-3.5"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m15 18-6-6 6-6"></path>
        </svg>
        <span>Previous</span>
      </button>
      <div className="flex items-center gap-x-1">
        
          {
            numberOfPageArray.map(page=> <button key={page}
                onClick={()=>setCurrentPage(page)}
                className={`min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-800 py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-gray-300 disabled:pointer-events-none dark:bg-neutral-600 dark:text-white dark:focus:bg-neutral-500 ${currentPage === page ? "bg-blue-600 text-white" :""}`}
                aria-current="page"
                disabled = {currentPage === page}
              >{page+1}</button>)
          }
        
      </div>
      <button
        type="button"
        onClick={handleNextPage}
        className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
        aria-label="Next"
        disabled={currentPage === numberOfPageArray.length - 1}
      >
        <span>Next</span>
        <svg
          className="shrink-0 size-3.5"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m9 18 6-6-6-6"></path>
        </svg>
      </button>
    </nav>
  );
};

Pagination.propTypes = {
    numberOfPageArray: PropTypes.array.isRequired,
    setCurrentPage: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired,
    handleNextPage: PropTypes.func.isRequired,
    handlePrevPage: PropTypes.func.isRequired,
}

export default Pagination;