import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import manage from "../../assets/images/produce.png";
import { IoMdAddCircleOutline } from "react-icons/io";
import { TbCamper } from "react-icons/tb";
import { MdMarkEmailRead } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="flex flex-col items-center w-48 min-h-screen overflow-hidden text-gray-700 bg-gray-100 rounded">
      <Link to="/" className="flex items-center w-full px-3 mt-3">
        <img src={logo} className="w-8" alt="logo" />
        <span className="ml-2 text-lg font-bold">MediCare</span>
      </Link>
      <div className="w-full px-2">
        <div className="flex flex-col items-center w-full mt-3 border-t border-gray-300">
          <a
            className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-300"
            href="#"
          >
            <svg
              className="w-6 h-6 stroke-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <span className="ml-2 text-sm font-medium">Dasboard</span>
          </a>
          <NavLink to="add-camp"
            className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-300"
          >
            <IoMdAddCircleOutline size={24} />
            <span className="ml-2 text-sm font-medium">Add a Camp</span>
          </NavLink>
          <NavLink to="manage-camp"
            className="flex items-center w-full h-12 px-3 mt-2 bg-gray-300 rounded"
          >
            <img src={manage} className="w-6 text-black" alt="logo" />
            <span className="ml-2 text-sm font-medium"> Manage Camps</span>
          </NavLink>
          <NavLink to="manage-registered-camp"
            className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-300"
          >
            <svg
              className="w-6 h-6 stroke-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
              />
            </svg>
            <span className="ml-2 text-sm font-medium">My Registered Camps</span>
          </NavLink>
        </div>
        <div className="flex flex-col items-center w-full mt-2 border-t border-gray-300">
          <Link to="/"
            className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-300"
          >
            <svg
              className="w-6 h-6 stroke-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <span className="ml-2 text-sm font-medium">Home</span>
          </Link>
          <Link to="/available-camp"
            className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-300"
          >
            <TbCamper size={24} />
            <span className="ml-2 text-sm font-medium">Available Camp</span>
          </Link>
          <Link to="/contact"
            className="relative flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-300"
          >
            <MdMarkEmailRead size={24} />
            <span className="ml-2 text-sm font-medium">Contact</span>
          </Link>
        </div>
      </div>
      <a
        className="flex items-center justify-center w-full h-16 mt-auto bg-gray-200 hover:bg-gray-300"
        href="#"
      >
        <svg
          className="w-6 h-6 stroke-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span className="ml-2 text-sm font-medium">Account</span>
      </a>
    </div>
  );
};

export default Sidebar;
