import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import SignupPage from "../page/Auth/SignupPage";
import LoginPage from "../page/Auth/LoginPage";
import DashboardLayout from "../layout/DashboardLayout";
import PrivateRoute from "./PrivateRoute";
import MyCourses from "../component/Dashboard/MyCourses/MyCourses";
import StudentRoute from "./StudentRoute";
import Dashboard from "../component/Dashboard/Dashboard";
import AllUsers from "../component/Dashboard/AllUsers/AllUsers";
import AdminRoute from "./AdminRoute";
import Courses from "../page/Courses/Courses";
import Home from "../page/Home/Home";
import axios from "axios";
import ErrorPage from "../page/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/course/:id",
        element: <Courses />,
        loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/course/${params?.id}`)

    
      },
    ],
  },

  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },

  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/users",
        element: <AllUsers />,
      },

      {
        path: "/dashboard/enrolledCourses",
        element: (
          <StudentRoute>
            <MyCourses />
          </StudentRoute>
        ),
      },
    ],
  },
]);

export default router;
