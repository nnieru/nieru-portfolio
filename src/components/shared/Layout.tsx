import { Outlet } from "react-router-dom";
import Sider from "./Sider";

export default function Layout() {
  return (
    <div className="flex w-screen min-h-screen bg-neutral-100 bg-cover">
      {/* Sider */}
      <div className="w-60">
        <Sider />
      </div>

      {/* Content */}
      <div className="flex-1">
        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
