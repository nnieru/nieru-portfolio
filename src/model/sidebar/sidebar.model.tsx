import { ReactNode } from "react";
import { FaHome } from "react-icons/fa";
import { IoDocument } from "react-icons/io5";

interface SideBarModel {
  key: string;
  path: string;
  label: string;
  icon: ReactNode;
}

const sidebarData: SideBarModel[] = [
  {
    key: "home",
    path: "/",
    label: "Home",
    icon: <FaHome/>,
  },
  {
    key: "portfolio",
    path: "/portfolio",
    label: "Portfolio",
    icon: <IoDocument/>,
  },
];

// export
export { sidebarData, type SideBarModel };
