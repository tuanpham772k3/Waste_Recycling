import { Outlet } from "react-router";
import Header from "@/shared/components/Header/Header";
import Footer from "@/shared/components/Footer/Footer";

const MainLayout = () => (
  <>
    <Header />
    <main>
      <Outlet />
    </main>
    <Footer />
  </>
);

export default MainLayout;
