import { useRoutes } from "react-router-dom";
import Home from "../pages/Home/Home";
import List from "../pages/Category/List";

export default function RouterElements() {
  const routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/categories",
      element: <List />,
    },
  ]);
  return routes;
}
