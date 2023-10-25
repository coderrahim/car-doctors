import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Services from "../Pages/Services/Services";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,

      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/services',
            element: <Services></Services>
        },
        {
            path: '/',
            element: <Home></Home>
        },
      ]
    },
  ]);

  export default router;