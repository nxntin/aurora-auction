import { RouterProvider, createBrowserRouter } from "react-router-dom";

import LoginPopup from "./pages/login";
import Homepages from "./pages/home";
import Dashboard from "./pages/Dashboard/Dashboard";
import Category from "./pages/category"



function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepages />,
    },
    {
      path: "/login",
      element: <LoginPopup />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
      children:[{
        path:"/dashboard/category",
        element:<Category/>
      },
       
      ]
    },
   
   
  ]);

  return <RouterProvider router={router} />;
}

export default App;
