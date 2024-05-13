import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Root } from "../components/layouts/root";
import Home from "../pages/home";
import Waitlist from "../pages/waitlist";

export const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="/waitlist" element={<Waitlist />} />
    </Route>
  )
);
