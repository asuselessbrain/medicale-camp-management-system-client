import { FaHandHoldingMedical } from "react-icons/fa";
import { GiWallet } from "react-icons/gi";
import { NavLink } from "react-router-dom";

const UserSidebar = () => {
    return (
        <div className="w-full">
            <NavLink
                  to="my-registered-camp"
                  className={({ isActive }) =>
                    isActive
                      ? "flex items-center w-full h-12 px-3 mt-2 bg-gray-300 rounded"
                      : "flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-300"
                  }
                >
                  <FaHandHoldingMedical size={24} />
                  <span className="ml-2 text-sm font-medium">Registered Camps</span>
                </NavLink>
                <NavLink
                  to="Payment-history"
                  className={({ isActive }) =>
                    isActive
                      ? "flex items-center w-full h-12 px-3 mt-2 bg-gray-300 rounded"
                      : "flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-300"
                  }
                >
                   <GiWallet size={24} />
                  <span className="ml-2 text-sm font-medium">
                    {" "}
                    PaymentHistory
                  </span>
                </NavLink>
        </div>
    );
};

export default UserSidebar;