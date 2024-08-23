import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CaseStudyPage from "../pages/CaseStudyPage";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/CaseStudy/:id",
    element: <CaseStudyPage />,
  },
]);

export default routes;
