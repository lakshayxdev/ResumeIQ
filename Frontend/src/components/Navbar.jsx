import { useEffect, useState } from "react";
// import LoginModal from "./LoginModal";
// import SignupModal from "./SignupModal";
import { LogIn } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { FaBrain } from "react-icons/fa";

const Navbar = () => {
  const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
  });
};
  const [user, setUser] = useState(null);
  const navigate=useNavigate();

  // const [showLogin, setShowLogin] = useState(false);
  // const [showSignup, setShowSignup] = useState(false);

  const loadUser = () => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      setUser(null);
    }
  };

  useEffect(() => {
    loadUser();

    window.addEventListener("focus", loadUser);

    return () => {
      window.removeEventListener("focus", loadUser);
    };
  }, []);

  

  return (
<>
  <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#070B16]/80 backdrop-blur-2xl">

    <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6">

      {/* Logo */}

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

      <div className="hidden items-center gap-10 md:flex">

        <button
          onClick={() => scrollToSection("home")}
          className="
            relative
            font-medium
            text-slate-300
            transition
            hover:text-white
            after:absolute
            after:left-0
            after:-bottom-2
            after:h-[2px]
            after:w-0
            after:bg-violet-500
            after:transition-all
            hover:after:w-full
          "
        >
          Home
        </button>

        <button
        onClick={() => scrollToSection("feature")}
          className="
            relative
            font-medium
            text-slate-300
            transition
            hover:text-white
            after:absolute
            after:left-0
            after:-bottom-2
            after:h-[2px]
            after:w-0
            after:bg-violet-500
            after:transition-all
            hover:after:w-full
          "
        >
          Features
        </button>

        <button
        onClick={() => scrollToSection("about")}
          className="
            relative
            font-medium
            text-slate-300
            transition
            hover:text-white
            after:absolute
            after:left-0
            after:-bottom-2
            after:h-[2px]
            after:w-0
            after:bg-violet-500
            after:transition-all
            hover:after:w-full
          "
        >
          About
        </button>

      </div>

      {/* Right Side */}

      <div className="flex items-center gap-4">

        {user ? (
          <>
          {/* User */}

<div className="flex items-center gap-3">

  {/* Avatar */}

  <div
    className="
      flex
      h-11
      w-11
      items-center
      justify-center
      rounded-full
      bg-violet-600/15
      text-lg
      font-bold
      text-violet-400
      ring-1
      ring-violet-500/20
      hover:border-2 border-violet-600
    "
  >
    {user.name?.charAt(0).toUpperCase()}
  </div>

  {/* Name */}

  <div className="hidden sm:block">

    <p className="text-sm text-slate-400">
      Welcome back
    </p>

    <h3 className="font-semibold text-white">
      {user.name}
    </h3>

  </div>

</div>

</>

) : (

<button
  onClick={() => navigate("/login")}
  className="
    flex
    items-center
    gap-2
    rounded-xl
    bg-violet-600
    px-3
    py-2
    font-medium
    text-white
    transition-all
    duration-200
    hover:bg-violet-500
    hover:shadow-lg
    hover:shadow-violet-500/20
  "
>
  <LogIn size={18} />
  Login
</button>

)}

</div>

</div>

</nav>

{/* <LoginModal
  isOpen={showLogin}
  onClose={() => {
    setShowLogin(false);
    loadUser();
  }}
  openSignup={() => {
    setShowLogin(false);
    setShowSignup(true);
  }}
/>

<SignupModal
  isOpen={showSignup}
  onClose={() => {
    setShowSignup(false);
    loadUser();
  }}
  openLogin={() => {
    setShowSignup(false);
    setShowLogin(true);
  }}
/> */}

</>
         
  );
};

export default Navbar;