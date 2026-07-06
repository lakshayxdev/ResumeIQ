// const Footer = () => {
//   return (
//     <footer className="border-t border-white/10 mt-20">
//       <div className="max-w-7xl mx-auto px-6 py-8">

//         <div className="flex flex-col md:flex-row justify-between items-center gap-4">

//           <h2 className="text-white font-semibold">
//             ResumeIQ
//           </h2>

//           <p className="text-slate-400 text-sm">
//             © {new Date().getFullYear()} ResumeIQ.
//             All rights reserved.
//           </p>

//           <p className="text-sm text-slate-500">
//   Crafted with ❤️ by{" "}
//   <span className="text-cyan-400 font-medium">
//     Lakshay
//   </span>
// </p>

//         </div>

//       </div>
//     </footer>
//   );
// };

// export default Footer;


import {
  FaBrain,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#07111f] border-t border-cyan-500/20 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Logo */}
          <div>
            <div className="flex items-center gap-3 select-none">
      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-violet-700 shadow-lg shadow-cyan-500/30">
        <FaBrain className="text-white text-2xl" />
      </div>

      <div>
        <h1 className="text-2xl font-extrabold tracking-tight text-white">
          Resume
          <span className="text-violet-500">IQ</span>
        </h1>
      </div>
    </div>
            <p className="text-gray-400 leading-7 mt-3">
              Optimize your resume with AI-powered insights, ATS score,
              keyword analysis, and personalized recommendations to land
              more interviews.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-5">
              Product
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-violet-400 cursor-pointer transition">
                ATS Checker
              </li>

              <li className="hover:text-violet-400 cursor-pointer transition">
                Resume Analysis
              </li>

              <li className="hover:text-violet-400 cursor-pointer transition">
                Skill Matching
              </li>

              <li className="hover:text-violet-400 cursor-pointer transition">
                Dashboard
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-5">
              Resources
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-violet-400 cursor-pointer transition">
                About
              </li>

              <li className="hover:text-violet-400 cursor-pointer transition">
                Features
              </li>

              <li className="hover:text-violet-400 cursor-pointer transition">
                FAQ
              </li>

              <li className="hover:text-violet-400 cursor-pointer transition">
                Contact
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-5">
              Connect
            </h3>

            <div className="flex gap-4 mb-6">

              <div className="w-11 h-11 rounded-xl bg-[#0f1b2d] hover:bg-violet-500 transition flex items-center justify-center cursor-pointer group">
                <FaGithub className="text-gray-300 group-hover:text-white text-xl" />
              </div>

              <div className="w-11 h-11 rounded-xl bg-[#0f1b2d] hover:bg-violet-500 transition flex items-center justify-center cursor-pointer group">
                <FaLinkedin className="text-gray-300 group-hover:text-white text-xl" />
              </div>

              <div className="w-11 h-11 rounded-xl bg-[#0f1b2d] hover:bg-violet-500 transition flex items-center justify-center cursor-pointer group">
                <FaTwitter className="text-gray-300 group-hover:text-white text-xl" />
              </div>

            </div>

            <p className="text-gray-400 text-sm">
              Build smarter resumes with AI and improve your chances of
              getting hired.
            </p>
          </div>

        </div>

        {/* Divider */}

        <div className="border-t border-cyan-500/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-500 text-sm">
            © {year} ResumeIQ. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm text-gray-500">
            <span className="hover:text-cyan-400 cursor-pointer transition">
              Privacy Policy
            </span>

            <span className="hover:text-cyan-400 cursor-pointer transition">
              Terms of Service
            </span>

            <span className="hover:text-cyan-400 cursor-pointer transition">
              Cookies
            </span>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;