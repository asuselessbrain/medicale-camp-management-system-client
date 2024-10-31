import { MdManageAccounts } from "react-icons/md";
import { NavLink } from "react-router-dom";


const AdminSidebar = () => {
    return (
        <div className="w-full">
            <NavLink
              to="manage-user"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center w-full h-12 px-3 mt-2 bg-gray-300 rounded"
                  : "flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-300"
              }
            >
              <MdManageAccounts size={24} />
              <span className="ml-2 text-sm font-medium">Manage User</span>
            </NavLink>
        </div>
    );
};

export default AdminSidebar;