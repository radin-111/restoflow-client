import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

import Error from "../Components/Error/Error";
import Root from "../Components/Root";
import Login from "../Components/LoginAndRegister/Login";
import Register from "../Components/LoginAndRegister/Register";
import Home from "../Layouts/Home";
import Redirect from "../Context/Redirect";
import AddFood from "../Layouts/AddFood/AddFood";
import Private from "../Context/Private";
import Myfoods from "../Layouts/Myfoods/Myfoods";
import UpdateFood from "../Layouts/UpdateFood/UpdateFood";
import Deny from "../Components/Deny";
import Allfoods from "../Layouts/Allfoods/Allfoods";
import FoodDetails from "../Layouts/Details/FoodDetails";
import Order from "../Layouts/Order/Order";
import MyOrder from "../Layouts/Order/MyOrder";
import Gallery from "../Layouts/Gallery/Gallery";
import Loading from "../Components/Loading";
import PasswordReset from "../Layouts/PasswordReset/PasswordReset";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        element: <Home></Home>,
        loader: () => fetch("https://restaurant-management-server-bay.vercel.app/foods"),
        hydrateFallbackElement: <Loading></Loading>
      },
      {
        path: 'password_reset',
        element: <PasswordReset></PasswordReset>
      },
      {
        path: 'login',
        element: <Redirect><Login></Login></Redirect>
      },
      {
        path: 'register',
        element: <Redirect><Register></Register></Redirect>
      },
      {
        path: 'addfood',
        element: <Private><AddFood></AddFood></Private>

      },
      {
        path: 'myfoods',
        element: <Private><Myfoods></Myfoods></Private>,
        loader: () => fetch("https://restaurant-management-server-bay.vercel.app/foods"),
        hydrateFallbackElement: <Loading></Loading>
      },
      {
        path: 'update/:id',
        element: <Private><UpdateFood></UpdateFood></Private>,
        loader: ({ params }) => fetch(`https://restaurant-management-server-bay.vercel.app/foods/${params.id}`),
        hydrateFallbackElement: <Loading></Loading>
      },
      {
        path: 'notallowed',
        element: <Deny></Deny>
      },
      {
        path: "allfoods",
        element: <Allfoods></Allfoods>,
        loader: () => fetch("https://restaurant-management-server-bay.vercel.app/foods"),
        hydrateFallbackElement: <Loading></Loading>

      },
      {
        path: 'details/:id',
        element: <FoodDetails></FoodDetails>,
        loader: ({ params }) => fetch(`https://restaurant-management-server-bay.vercel.app/foods/${params.id}`),
        hydrateFallbackElement: <Loading></Loading>
      },
      {
        path: 'order/:id',
        element: <Private><Order></Order></Private>,
        loader: ({ params }) => fetch(`https://restaurant-management-server-bay.vercel.app/foods/${params.id}`),
        hydrateFallbackElement: <Loading></Loading>
      },
      {
        path: 'myorders',
        element: <Private><MyOrder></MyOrder></Private>,
        loader: () => fetch('https://restaurant-management-server-bay.vercel.app/orders'),
        hydrateFallbackElement: <Loading></Loading>

      },
      {
        path: 'gallery',
        element: <Gallery></Gallery>
      }
    ]
  },
]);