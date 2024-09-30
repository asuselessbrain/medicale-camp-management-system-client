import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

const MainLayout = () => {
  return (
    <div className="max-w-[1560px] mx-auto">
      <div className="h-[84px] lg:h-[99px]">
        <NavBar />
      </div>
      <ScrollToTop />
      <Outlet />
    </div>
  );
};

export default MainLayout;
