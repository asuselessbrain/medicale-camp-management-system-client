import React, { useState } from 'react';

const Sorting = () => {
  // State to control the visibility of dropdowns
  const [isMainDropdownOpen, setMainDropdownOpen] = useState(false);
  const [isSubDropdownOpen, setSubDropdownOpen] = useState(false);

  // Function to toggle the main dropdown
  const toggleMainDropdown = () => {
    setMainDropdownOpen(!isMainDropdownOpen);
  };

  // Function to toggle the sub dropdown
  const toggleSubDropdown = () => {
    setSubDropdownOpen(!isSubDropdownOpen);
  };

  return (
    <div className="dropdown relative inline-flex">
      <button
        type="button"
        onClick={toggleMainDropdown}
        className="dropdown-toggle inline-flex justify-center items-center gap-2 py-3 px-6 text-sm bg-indigo-600 text-white rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-indigo-700"
      >
        Dropdown
        <svg
          className={`w-2.5 h-2.5 text-white transition-transform ${
            isMainDropdownOpen ? 'rotate-180' : ''
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
                className="flex items-center justify-between px-6 py-2 hover:bg-gray-100 text-gray-900 font-medium cursor-pointer"
                onClick={toggleSubDropdown}
              >
                Notifications
                <svg
                  className={`w-4 h-4 transition-transform ${
                    isSubDropdownOpen ? 'rotate-180' : ''
                  }`}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.00378 5.99561L15.004 11.9959L9.00024 17.9996"
                    stroke="black"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </a>
              {isSubDropdownOpen && (
                <ul
                  className="absolute translate-x-44 right-0 -translate-y-7 bg-white shadow-lg rounded-xl w-44"
                  id="dropdown-default-sub"
                >
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
                      className="block px-6 py-2 hover:bg-gray-100 text-gray-900 font-medium"
                      href="#"
                    >
                      Notifications
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
              )}
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
