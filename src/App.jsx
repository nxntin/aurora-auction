import { RouterProvider, createBrowserRouter } from "react-router-dom";

import LoginPopup from "./pages/login";
import Homepages from "./pages/login/home";

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
  ]);

  return <RouterProvider router={router} />;
}

export default App;
