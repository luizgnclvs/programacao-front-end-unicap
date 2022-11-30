import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import SideMenu from "../components/SideMenu";

export default function Root() {
  return (
    <div id="body">
      <div id="header">
        <Header />
      </div>
      <div id="sidemenu">
        <SideMenu />
      </div>
      <div id="outlet">
        <Outlet />
      </div>
    </div>
  );
} 