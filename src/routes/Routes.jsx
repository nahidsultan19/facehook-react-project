import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Profile from "../pages/Profile";
import Registration from "../pages/Registration";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: (
          <PrivateRoutes>
            <Home />
          </PrivateRoutes>
        ),
      },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Registration /> },
      {
        path: "/profile",
        element: (
          <PrivateRoutes>
            <Profile />
          </PrivateRoutes>
        ),
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;
