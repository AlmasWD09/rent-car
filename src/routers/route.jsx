import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import Vehicles from "../pages/vehicles/Vehicles";
import CarDetails from "../pages/carDetails/CarDetails";
import About from "../pages/home/About";
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

