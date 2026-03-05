import { createBrowserRouter } from "react-router";
import { LandingPage } from "./pages/LandingPage";
import { PitchDeck } from "./pages/PitchDeck";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { TermsOfService } from "./pages/TermsOfService";
import { LocationTerms } from "./pages/LocationTerms";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
  },
  {
    path: "/pitch",
    Component: PitchDeck,
  },
  {
    path: "/privacy",
    Component: PrivacyPolicy,
  },
  {
    path: "/terms",
    Component: TermsOfService,
  },
  {
    path: "/location",
    Component: LocationTerms,
  },
]);
