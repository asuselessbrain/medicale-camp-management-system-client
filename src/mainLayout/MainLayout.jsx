import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import Footer from "../components/footer/Footer";

const MainLayout = () => {
  return (
    <div className="max-w-[1440px] md:mx-auto sm:mx-4">
      <div>
        <NavBar />
      </div>
      <ScrollToTop />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
