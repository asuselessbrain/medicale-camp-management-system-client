import React, { useState } from "react";

const Sorting = () => {
  // State to control the visibility of dropdowns
  const [isMainDropdownOpen, setMainDropdownOpen] = useState(false);

  // Function to toggle the main dropdown
  const toggleMainDropdown = () => {
    setMainDropdownOpen(!isMainDropdownOpen);
  };

  return (
    <div className="dropdown relative inline-flex">
      <button
        type="button"
        onClick={toggleMainDropdown}
        className="dropdown-toggle inline-flex justify-center items-center gap-2 py-3 px-6 text-sm bg-indigo-600 text-white rounded cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-indigo-700"
      >
        Dropdown
        <svg
          className={`w-2.5 h-2.5 text-white transition-transform ${
            isMainDropdownOpen ? "rotate-180" : ""
          }`}
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          ></path>
        </svg>
      </button>

      {isMainDropdownOpen && (
        <div
          id="dropdown-default-main"
          className="dropdown-menu rounded-xl shadow-lg bg-white absolute top-full w-72 mt-2"
          aria-labelledby="dropdown-default-main"
        >
          <ul className="py-2">
            <li>
              <a
                className="block px-6 py-2 hover:bg-gray-100 text-gray-900 font-medium"
                href="#"
              >
                Downloads
              </a>
            </li>
            <li>
              <a
                className="block px-6 py-2 hover:bg-gray-100 text-gray-900 font-medium"
                href="#"
              >
                Saved Files
              </a>
            </li>
            <li>
              <a
                className="block px-6 py-2 hover:bg-gray-100 text-red-500 font-medium"
                href="#"
              >
                Log Out
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sorting;
