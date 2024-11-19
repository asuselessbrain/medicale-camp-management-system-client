import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../mainLayout/MainLayout";
import Home from "../pages/home/Home";
import Login from "../pages/home/login/Login";
import Registration from "../pages/home/registration/Registration";
import AvailableCamp from "../pages/availableCamp/AvailableCamp";
import CampDetails from "../pages/campDetail/CampDetails";
import Dashboard from "../mainLayout/Dashboard";
import AddCamp from "../pages/home/dashboard/organizer/addCamp/AddCamp";
import MyRegisteredCamp from "../pages/home/dashboard/user/MyRegisteredCamp";
import Contact from "../pages/contact/Contact";
import Profile from "../pages/Dashboard/common/Profile";
import ManageRegisteredCamp from "../pages/home/dashboard/organizer/manageRegisteredCamp/ManageRegisteredCamp";
import ShowUser from "../pages/home/dashboard/admin/users/ShowUser";
import PaymentHistory from "../pages/home/dashboard/user/PaymentStatus";
import PaymentModal from "../pages/home/dashboard/user/PaymentModal";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/available-camp",
        element: <AvailableCamp />,
      },
      {
        path: "/available-camp/:id",
        element: <CampDetails />,
      },
      {
        path:"/contact",
        element: <Contact />
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
     { path: "add-camp",
      element:<AddCamp />
     },
     { path: "manage-registered-camp",
      element:<ManageRegisteredCamp />
     },
     { path: "profile",
      element:<Profile />
     },
    //  admin route
     { path: "manage-user",
      element:<ShowUser />
     },
     //  user route
     { path: "my-registered-camp",
      element:<MyRegisteredCamp />
     },
     { path: "payment-history",
      element:<PaymentHistory />
     },
     { path: "pay-now",
      element:<PaymentModal />
     },
    ],
  },
  {
    path: "/sign-in",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <Registration />,
  },
]);

export default router;
