import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import LandingPage from "../pages/LandingPage";
import GuessingGame from "../pages/GuessingGame";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ index: true, element: <LandingPage /> }],
  },
  {
    path: "/Guessinggame",
    element: <GuessingGame />,
  },
]);
