import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home/Home";
import Coverage from "../Pages/Coverage/Coverage";
import AboutUs from "../Pages/AboutUs/AboutUs";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Auth/Login/Login";
import Register from "../Pages/Auth/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Rider from "../Pages/Rider/Rider";
import SendParcel from "../Pages/sendParcel/SendParcel";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
        {
            index: true,
            element:<Home></Home>
        },
        {
          path: "rider",
          element: <PrivateRoute> <Rider></Rider> </PrivateRoute>
        },
        {
          path: "send_parcel",
          element: <PrivateRoute> <SendParcel></SendParcel> </PrivateRoute>
        },
        {
            path: "coverage",
            element: <Coverage></Coverage>,
            loader: () => fetch('/serviceCenter.json').then(res => res.json())
        },
        {
          path: '/aboutUs',
          element: <AboutUs></AboutUs>
        }
    ]
  },
  {
    path: '/',
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
    ]
  }
]);

export default router;