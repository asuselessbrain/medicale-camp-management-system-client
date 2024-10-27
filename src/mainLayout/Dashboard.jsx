import { Outlet } from "react-router-dom";
import OrganizerSidebar from "../components/Sidebars/OrganizerSidebar";

const Dashboard = () => {
  return (
    <div className="flex justify-between">
      <OrganizerSidebar />
      <div className="flex-1 m-4 ml-52">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
