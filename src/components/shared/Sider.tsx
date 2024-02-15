import { Link, useLocation } from "react-router-dom";
import { SideBarModel, sidebarData } from "../../model/sidebar/sidebar.model";
import classNames from "classnames";

export default function Sider() {
  return (
    <div className="bg-slate-900  w-60 h-full text-white  rounded-se-[24px] rounded-ee-[24px] flex flex-col px-4 top-0 left-0 fixed">
      {/* logo */}
      <div className="flex py-4 h-30 justify-center border-b border-gray-300">
        <p className="text-xl font-bold text-center">Nieru Page</p>
      </div>

      {/* content */}
      <div className="flex-1 flex flex-col gap-2 mt-4">
        {sidebarData.map((item) => (
          <SideBarLink sideBarData={item} key={item.key}/>
        ))}
      </div>

      {/* footer */}
      <div className="flex pb-4 pt-2 border-t  border-gray-300 justify-center">
        created by &nbsp; <span className="font-semibold">Nieru</span> &nbsp;
        ©2024
      </div>
    </div>
  );
}

type Props = {
  sideBarData: SideBarModel;
};
function SideBarLink(props: Props) {
  const { sideBarData } = props;
  const { pathname } = useLocation();

  return (
    <Link
      to={sideBarData.path}
      key={sideBarData.key}
      className={classNames(
        pathname === sideBarData.path
          ? "bg-slate-700 bg-opacity-50 rounded-md"
          : "",
        "flex items-center gap-4 px-1.5 py-2 hover:bg-slate-700 bg-opacity-50 rounded-md"
      )}>
      <span className="text-xl">{sideBarData.icon}</span>
      {sideBarData.label}
    </Link>
  );
}
