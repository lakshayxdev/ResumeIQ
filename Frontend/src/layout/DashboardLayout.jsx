// import Sidebar from "../dashboard/Sidebar"
// import { Outlet } from "react-router-dom";


// const DashboardLayout = () => {
//   return (
//     <div className="flex h-screen overflow-hidden">
//         <Sidebar />

//         <main>
//             <Outlet />
//         </main>
//     </div>
//   )
// }

// export default DashboardLayout


import Sidebar from "../dashboard/Sidebar";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div className="min-h-screen bg-[#070B16]">

      <Sidebar />

      <main className="lg:ml-72 min-h-screen mt-15 md:mt-2">

        <Outlet />

      </main>

    </div>
  );
}