import { useEffect, useState } from "react";
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";
import { LogIn } from "lucide-react";
import { LogOut } from "lucide-react";

const Navbar = () => {
  const [user, setUser] = useState(null);

  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

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

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setUser(null);
  };

  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#070B14]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-white">
            Resume<span className="text-violet-700">IQ</span>
          </h1>

          <div className="flex items-center gap-4">
            {user ? (
              <>
               <span className="sm:hidden text-white font-medium">
  {user.name?.charAt(0).toUpperCase()}
</span>

<span className="hidden sm:block text-white font-medium">
  {user.name}
</span>

                <button
                  onClick={handleLogout}
                  className="px-4 py-2 flex items-center justify-center gap-2 rounded-full
bg-red-500/10
hover:bg-red-500/20
text-red-400
border
border-red-500/20
" 
                >
                  Logout
                  <LogOut size={18} />
                </button>
              </>
            ) : (
              <button  onClick={() => setShowLogin(true)} className="flex items-center cursor-pointer gap-2 rounded-full bg-violet-700 px-4 py-2 text-white hover:bg-violet-800 transition">
  <LogIn size={18} />
  Login
</button>
            )}
          </div>
        </div>
      </nav>

      <LoginModal
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
      />
    </>
  );
};

export default Navbar;