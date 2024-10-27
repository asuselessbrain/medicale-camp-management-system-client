import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebars/Sidebar";

const Dashboard = () => {
    return (
        <div>
            <Sidebar />
            <Outlet />
        </div>
    );
};

export default Dashboard;