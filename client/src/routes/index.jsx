import Add from "../pages/Add/Add";
import Basket from "../pages/Basket/Basket";
import Home from "../pages/Home/Home";
import MainRoot from "../pages/MainRoot";

export const ROUTES = [
  {
    element: <MainRoot/>,
    path: "/",
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "add",
        element: <Add />,
      },
      {
        path:"basket",
        element:<Basket/>
      }
    ],
  },
];