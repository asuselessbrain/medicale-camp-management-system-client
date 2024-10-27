import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../mainLayout/MainLayout";
import Home from "../pages/home/Home";
import Login from "../pages/home/login/Login";
import Registration from "../pages/home/registration/Registration";
import AvailableCamp from "../pages/availableCamp/AvailableCamp";
import CampDetails from "../pages/campDetail/CampDetails";
import Dashboard from "../mainLayout/Dashboard";
import AddCamp from "../pages/home/dashboard/organizer/addCamp/AddCamp";

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
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
     { path: "add-camp",
      element:<AddCamp />
     }
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
