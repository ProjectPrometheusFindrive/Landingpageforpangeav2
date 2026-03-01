import { createBrowserRouter } from "react-router";
import { LandingPage } from "./pages/LandingPage";
import { PitchDeck } from "./pages/PitchDeck";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
  },
  {
    path: "/pitch",
    Component: PitchDeck,
  },
]);
