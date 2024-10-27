import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebars/Sidebar";

const Dashboard = () => {
  return (
    <div className="flex justify-between gap-6">
      <Sidebar />
      <div className="flex-1 m-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
