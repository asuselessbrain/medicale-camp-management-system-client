import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";

const MainLayout = () => {
    return (
        <div className="max-w-[1440px] mx-auto">
            <NavBar />
            <Outlet />
        </div>
    );
};

export default MainLayout;