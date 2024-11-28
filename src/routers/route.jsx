import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import Vehicles from "../pages/vehicles/Vehicles";
import ContactUs from "../pages/home/ContactUs";

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
          path: "/vehicles",
          element: <Vehicles />,
        },
        {
          path: "/contact",
          element: <ContactUs />,
        },
      ],
    },
  ]);
  export default router;

