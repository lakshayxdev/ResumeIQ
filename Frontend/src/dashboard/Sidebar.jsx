import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { FaBrain } from "react-icons/fa";
import {
  House,
  LayoutDashboard,
  FileSearch,
  History,
  LogOut,
  Menu,
  X,
} from "lucide-react";

const menu = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard",
  },
  {
    title: "Analyze Resume",
    icon: FileSearch,
    path: "/dashboard/analyze",
  },
  {
    title: "History",
    icon: History,
    path: "/dashboard/history",
  },
];

export default function Sidebar() {

  const navigate=useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    toast.success("Logged out successfully");
    navigate("/", { replace: true });
  }

  const [open, setOpen] = useState(false);

  const navClass = ({ isActive }) =>
    `
      group
      flex
      w-full
      items-center
      gap-4
      rounded-2xl
      px-5
      py-4
      text-left
      transition-all
      ${
        isActive
          ? "bg-violet-600 text-white"
          : "text-slate-300 hover:bg-violet-600/15 hover:text-white"
      }
    `;

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed left-5 top-5 z-50 rounded-xl bg-[#121826] p-3 text-white lg:hidden"
      >
        <Menu size={22} />
      </button>
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
        />
      )}
      <aside
        className={`
          fixed
          top-0
          left-0
          z-50
          flex
          h-screen
          w-72
          flex-col
          border-r
          border-white/10
          bg-[#090D16]/95
          backdrop-blur-2xl
          transition-transform
          duration-300

          ${open ? "translate-x-0" : "-translate-x-full"}

          lg:translate-x-0
        `}
      >

        <div className="flex items-center justify-between border-b border-white/10 p-7">
                 <div className="flex items-center gap-3 select-none">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-violet-700 shadow-lg shadow-cyan-500/30">
                  <FaBrain className="text-white text-2xl" />
                </div>
          
                <div>
                  <h1 className="text-xl md:text-2xl font-bold tracking-tight text-white">
                    Resume
                    <span className="text-violet-500">IQ</span>
                  </h1>
                </div>
              </div>

          <button
            onClick={() => setOpen(false)}
            className="text-white lg:hidden"
          >
            <X />
          </button>
        </div>


        <div className="flex-1 px-4 py-8">
          <div className="space-y-3">

            <NavLink
              to="/"
              onClick={() => setOpen(false)}
              className={navClass}
            >
              <House
                size={22}
                className="text-white"
              />

              <span className="font-medium">
                Back to Home
              </span>
            </NavLink>

            {menu.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.title}
                  to={item.path}
                  end={item.path === "/dashboard"}
                  onClick={() => setOpen(false)}
                  className={navClass}
                >
                  <Icon
                    size={22}
                    className="text-white"
                  />

                  <span className="font-medium">
                    {item.title}
                  </span>
                </NavLink>
              );
            })}
          </div>
        </div>


        <div className="border-t border-white/10 p-5">
          <button
          onClick={handleLogout}
  className="
    flex
    w-full
    items-center
    justify-center
    gap-3
    rounded-xl
    border
    border-white/10
    bg-white/5
    py-3.5
    text-slate-300
    transition-all
    duration-200
    hover:border-red-500/40
    hover:bg-red-500/10
    hover:text-red-400
  "
>
  <LogOut size={18} />
  <span className="font-medium">Logout</span>
</button>
        </div>
      </aside>
    </>
  );
}