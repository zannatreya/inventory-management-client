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
// import DisplayError from "../../Pages/Shared/DisplayError/DisplayError";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    // errorElement: <DisplayError></DisplayError>,

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
    ],
  },
  // {
  //   path: "/dashboard",
  //   element: (
  //     <PrivateRoute>
  //       <DashboardLayout></DashboardLayout>
  //     </PrivateRoute>
  //   ),
  //   errorElement: <DisplayError></DisplayError>,
  //   children: [
  //     {
  //       path: "/dashboard",
  //       element: <MyAppointment></MyAppointment>,
  //     },
  //     {
  //       path: "/dashboard/allusers",
  //       element: (
  //         <AdminRoute>
  //           <AllUsers></AllUsers>
  //         </AdminRoute>
  //       ),
  //     },
  //     {
  //       path: "/dashboard/adddoctor",
  //       element: (
  //         <AdminRoute>
  //           <AddDoctor></AddDoctor>
  //         </AdminRoute>
  //       ),
  //     },
  //     {
  //       path: "/dashboard/managedoctor",
  //       element: (
  //         <AdminRoute>
  //           <ManageDoctor></ManageDoctor>
  //         </AdminRoute>
  //       ),
  //     },
  //     {
  //       path: "/dashboard/payment/:id",
  //       element: <Payment></Payment>,
  //       loader: ({ params }) =>
  //         fetch(
  //           `https://doctors-portal-server-silk-tau.vercel.app/bookings/${params.id}`
  //         ),
  //     },
  //   ],
  // },
]);
export default router;
