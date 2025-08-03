import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <main>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default MainLayout;
