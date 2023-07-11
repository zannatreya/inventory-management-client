import { createBrowserRouter } from "react-router-dom";
// import DashboardLayout from "../../layout/DashboardLayout";
import Main from "../../layout/Main";
// import Appointment from "../../Pages/Appointment/Appointment/Appointment";
// import MyAppointment from "../../Pages/Dashboard/Dashboard/MyAppointment";
import Home from "../../Pages/Home/Home/Home";
// import Login from "../../Pages/Login/Login";
// import SignUp from "../../Pages/Login/SignUp";
// import PrivateRoute from "../PrivateRoute/PrivateRoute";
// import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
// import AdminRoute from "../AdminRoute/AdminRoute";
// import AddDoctor from "../../Pages/Dashboard/AddDoctor/AddDoctor";
// import ManageDoctor from "../../Pages/Dashboard/ManageDoctor/ManageDoctor";
// import Payment from "../../Pages/Dashboard/Payment/Payment";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import DisplayError from "../../Pages/Shared/DisplayError/DisplayError";
import AddItems from "../../Pages/AddItems/AddItems";
import MyItems from "../../Pages/MyItems/MyItems";
import ManageItems from "../../Pages/ManageItems/ManageItems";
import UpdateItems from "../../UpdateItems/UpdateItems";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <DisplayError></DisplayError>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Register></Register>,
      },
      {
        path: "/inventories/add",
        element: <AddItems></AddItems>,
      },
      {
        path: "/inventories/my",
        element: <MyItems></MyItems>,
      },
      {
        path: "/inventories/manage",
        element: <ManageItems></ManageItems>,
      },
      {
        path: "/inventories/:id",
        element: <UpdateItems></UpdateItems>,
      },
    ],
  },
]);
export default router;
