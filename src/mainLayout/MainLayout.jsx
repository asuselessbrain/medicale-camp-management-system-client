import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import Footer from "../components/footer/Footer";

const MainLayout = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="h-[80px] lg:h-[80px]">
        <NavBar />
      </div>
      <ScrollToTop />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
