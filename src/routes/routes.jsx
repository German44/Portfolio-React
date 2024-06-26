import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CaseStudyPage from "../pages/CaseStudyPage";
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    loader: "",
    children: [],
  },
  {
    path: "/work/CaseStudyPage",
    element: <CaseStudyPage />,
    loader: "",
  },
]);
export default routes;
