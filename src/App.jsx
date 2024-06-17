import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/homepage";
import Shop from "./pages/shop";
import ItemDetails from "./pages/itemdetails";
import Jewelry from "./pages/jewelry";

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
      path: "/itemdetails",
      element: <ItemDetails />,
    },
    {
      path: "/jewelry",
      element: <Jewelry />,
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
