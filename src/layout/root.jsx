import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Root = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto bg-gray-50">
        <Outlet />
      </div>
    </>
  );
};

export default Root;
