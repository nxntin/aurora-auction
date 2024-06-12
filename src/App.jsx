import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/homepage";
import Shop from "./pages/shop";
import Dashboard from "../Dashboard";
import Category from "../Category";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/shop",
      element: <Shop />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
      children: [
        {
          path: "/dashboard/category",
          element: <Category />,
        }
      ]
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
