

const DeleteModal = () => {
  return (
    <div className="modal opacity-0 pointer-events-none fixed w-full z-10 h-full top-0 left-0 flex items-center justify-center">
      <div className="modal-overlay absolute w-full h-full bg-gray-300 opacity-50"></div>
      <div className="modal-container bg-gradient-to-r bg-white dark:bg-gray-800 max-w-lg mx-auto rounded shadow-lg z-50 overflow-y-auto">
        <div className="modal-content py-4 text-left px-6">
          <div className="flex justify-end items-center pb-3">
            <div className="modal-close cursor-pointer z-50 p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-400 dark:text-gray-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>
          <h2 className="text-center font-bold text-2xl mt-1 text-gray-600 dark:text-gray-100">
            Delete media?
          </h2>
          <p className=" text-gray-500 font-medium text-center my-6 mx-6 dark:text-gray-200">
            Are you sure you want to delete "rainiy_day.jpg"? You can't undo
            this action.
          </p>
          <div className="px-4 flex flex-row py-4 min-w-min border-l-4 border-red-400 dark:border-gray-200 bg-red-100 dark:bg-gray-700 rounded mx-auto">
            <span className="w-6 h-6 mr-4 mt-1 text-red-500 dark:text-gray-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <div>
              <h2 className="text-lg font-bold text-red-700 dark:text-gray-100">
                Warning
              </h2>
              <p className="text-sm my-2 text-red-500 dark:text-gray-200 font-medium">
                By deleting this media 8 connected hotspots will also be
                deleting.
              </p>
            </div>
          </div>
          <div className="flex-row md:flex items-center md:justify-between py-4 text-center mx-auto">
            <div className="space-y-2 sm:space-x-2 my-4">
              <button className="modal-close px-5 py-2 bg-gray-500 rounded-full text-gray-200 font-semibold hover:bg-gray-800 dark:hover:bg-gray-600 hover:text-gray-100 focus:outline-none">
                No, Keep it.
              </button>
              <button className="modal-close px-5 py-2 bg-red-500 dark:bg-gray-100 rounded-full text-gray-200 dark:text-gray-700 font-semibold hover:bg-red-600 dark:hover:bg-white hover:text-gray-100 dark:hover:text-gray-800 focus:outline-none">
                Yes, Delete media!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
