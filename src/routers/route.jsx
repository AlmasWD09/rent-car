import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import Vehicles from "../pages/vehicles/Vehicles";
import ContactUs from "../pages/home/ContactUs";
import CarDetails from "../pages/carDetails/carDetails";
import About from "../pages/home/About";

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
        {
          path: "/carDetails/:id",
          element: <CarDetails/> 
        },
        {
          path: "/about",
          element: <About/>
        }
      ],
    },
  ]);
  export default router;

