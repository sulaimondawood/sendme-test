import { Outlet } from "react-router-dom";
import { NavBar } from "../global/NavBar";
import { Footer } from "../sections/Footer";

export const Root = () => {
  return (
    <main className="">
      <NavBar />
      <Outlet />
      <Footer />
    </main>
  );
};
