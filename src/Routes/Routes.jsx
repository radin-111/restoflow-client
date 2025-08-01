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
        hydrateFallbackElement: <span className="loading loading-spinner text-error"></span>
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
        hydrateFallbackElement: <span className="loading loading-spinner text-error"></span>
      },
      {
        path: 'update/:id',
        element: <Private><UpdateFood></UpdateFood></Private>,
        loader: ({ params }) => fetch(`https://restaurant-management-server-bay.vercel.app/foods/${params.id}`),
        hydrateFallbackElement: <span className="loading loading-spinner text-error"></span>
      },
      {
        path: 'notallowed',
        element: <Deny></Deny>
      },
      {
        path: "allfoods",
        element: <Allfoods></Allfoods>,
        loader: () => fetch("https://restaurant-management-server-bay.vercel.app/foods"),
        hydrateFallbackElement: <span className="loading loading-spinner text-error"></span>

      },
      {
        path: 'details/:id',
        element: <FoodDetails></FoodDetails>,
        loader: ({ params }) => fetch(`https://restaurant-management-server-bay.vercel.app/foods/${params.id}`),
        hydrateFallbackElement: <span className="loading loading-spinner text-error"></span>
      },
      {
        path: 'order/:id',
        element: <Private><Order></Order></Private>,
        loader: ({ params }) => fetch(`https://restaurant-management-server-bay.vercel.app/foods/${params.id}`),
        hydrateFallbackElement: <span className="loading loading-spinner text-error"></span>
      },
      {
        path: 'myorders',
        element: <Private><MyOrder></MyOrder></Private>,
        loader: () => fetch('https://restaurant-management-server-bay.vercel.app/orders'),
        hydrateFallbackElement: <span className="loading loading-spinner text-error"></span>

      },
      {
        path: 'gallery',
        element: <Gallery></Gallery>
      }
    ]
  },
]);