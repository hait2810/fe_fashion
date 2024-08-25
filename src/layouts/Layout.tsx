import { Outlet } from "react-router-dom";
import Header from "./Header";
const Layout = () => {
  return (
    <>
      <Header />
      <main className="pt-[5rem]">
        <Outlet />
      </main>
    </>
  );
};
export default Layout;
