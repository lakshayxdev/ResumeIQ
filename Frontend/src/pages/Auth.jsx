import { useState } from "react";
import api from "../components/api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { User, Mail, Lock, ArrowRight, Eye, EyeOff } from "lucide-react";
import { FaBrain } from "react-icons/fa";


const Auth = () => {
  const navigate=useNavigate();

  const [isLogin, setIsLogin] = useState(true);

  const [loginData, setLoginData] = useState({
    email:"",
    password:""
});

const [signupData, setSignupData]=useState({
    name:"",
    email:"",
    password:""
});

const [loginLoading,setLoginLoading]=useState(false);
const [signupLoading,setSignupLoading]=useState(false);
const [showPassword,setShowPassword]=useState(false);

const handleLoginChange = (e) => {
  setLoginData((prev) => ({
    ...prev,
    [e.target.name]: e.target.value,
  }));
};

const handleSignupChange = (e) => {
  setSignupData((prev) => ({
    ...prev,
    [e.target.name]: e.target.value,
  }));
};

 const handleLogin = async (e) => {
  if (!loginData.email.trim() || !loginData.password.trim()) {
  toast.error("All Fields are required");
  return;
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!emailRegex.test(loginData.email)) {
  toast.error("Please enter a valid email address");
  return;
}

  e.preventDefault();
    try {
      setLoginLoading(true);
      const { data } = await api.post("/api/auth/login", loginData);
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      toast.success("Login successful");
      navigate("/dashboard");
      window.location.reload();
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong");
    } finally {
      setLoginLoading(false);
    }
  };

   const handleSignup = async (e) => {
     if (!signupData.email.trim() || !signupData.password.trim()) {
  toast.error("All Fields are required");
  return;
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!emailRegex.test(signupData.email)) {
  toast.error("Please enter a valid email address");
  return;
}
    e.preventDefault();
    try {
      setSignupLoading(true);

      const {data} = await api.post(
        "/api/auth/signup",
        signupData
      );
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      navigate("/dashboard");
    } catch (err) {
      toast.error("Something went wrong");
      console.log("error :", err);
    } finally {
      setSignupLoading(false);
    }
  };













  return (
<section className="relative min-h-screen overflow-hidden bg-[#070B16]">

  {/* Grid */}

  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:70px_70px]" />

  {/* Glow */}

  <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[170px]" />

  <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-fuchsia-600/15 blur-[150px]" />

  {/* Logo */}

  <header className="relative z-20 px-8 py-8">

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

  </header>

  {/* Center */}

  <div className="relative z-10 flex min-h-[85vh] items-center justify-center px-5">

    <div
      className="
      w-full
      max-w-md
      overflow-hidden
      rounded-3xl
      border
      border-white/10
      bg-[#101827]/90
      backdrop-blur-2xl
      shadow-[0_20px_80px_rgba(0,0,0,.45)]
    "
    >

      {/* Tabs */}

      <div className="relative flex">

        <button
          onClick={() => setIsLogin(true)}
          className={`
            relative
            z-10
            w-1/2
            py-5
            text-lg
            font-semibold
            transition

            ${
              isLogin
                ? "text-white"
                : "text-slate-500"
            }
          `}
        >
          Login
        </button>

        <button
          onClick={() => setIsLogin(false)}
          className={`
            relative
            z-10
            w-1/2
            py-5
            text-lg
            font-semibold
            transition

            ${
              !isLogin
                ? "text-white"
                : "text-slate-500"
            }
          `}
        >
          Sign In
        </button>

        {/* Sliding Pill */}

        <div
          className={`absolute
            bottom-0
            left-0
            h-1
            w-1/2
            rounded-full
            bg-violet-500
            transition-all
            duration-500

            ${
              isLogin
                ? "translate-x-0"
                : "translate-x-full"
            }
          `}
        />

      </div>

      {/* Slider */}

<div className="overflow-hidden">

  <div
    className={`
      flex
      w-[200%]
      transition-transform
      duration-500
      ease-in-out

      ${
        isLogin
          ? "translate-x-0"
          : "-translate-x-1/2"
      }
    `}
  >

    {/* ================= LOGIN ================= */}

    <div className="w-1/2 shrink-0 p-8">

      <h2 className="text-3xl font-bold text-white">
        Welcome Back 
      </h2>

      <p className="mt-2 text-slate-400">
        Continue your resume journey.
      </p>

      <div className="mt-8">

        {/* Paste Login Form Here */}
        <form
          onSubmit={handleLogin}
          className="space-y-5"
        >
         

          <div>
            <label
              className="
                block
                text-xs
                uppercase
                tracking-wider
                text-slate-400
                mb-2
              "
            >
              Email Address
            </label>

            <div className="relative">
              <Mail
                size={18}
                className="
                  absolute
                  left-4
                  top-1/2
                  -translate-y-1/2
                  text-slate-500
                "
              />

              <input
                type="email"
                name="email"
                placeholder="name@example.com"
                value={
                  loginData.email
                }
                onChange={
                  handleLoginChange
                }
                required
                className="
                  w-full
                  bg-slate-950
                  border
                  border-slate-800
                  rounded-xl
                  py-3
                  pl-12
                  pr-4
                  text-white
                  outline-none
                  focus:border-violet-400
                  transition-all
                "
              />
            </div>
          </div>


          <div>
            <div
              className="
                flex
                justify-between
                items-center
                mb-2
              "
            >
              <label
                className="
                  text-xs
                  uppercase
                  tracking-wider
                  text-slate-400
                "
              >
                Password
              </label>

             
            </div>

            <div className="relative">
              <Lock
                size={18}
                className="
                  absolute
                  left-4
                  top-1/2
                  -translate-y-1/2
                  text-slate-500
                "
              />

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="••••••••"
                value={
                  loginData.password
                }
                onChange={
                  handleLoginChange
                }
                required
                className="
                  w-full
                  bg-slate-950
                  border
                  border-slate-800
                  rounded-lg
                  py-3
                  pl-12
                  pr-4
                  text-white
                  outline-none
                  focus:border-violet-400
                  transition-all
                "
              />

              <button type="button" onClick={()=> setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white">
                {showPassword ? (
                  <EyeOff size={18}/>
                ) :
              (
                <Eye size={18}/>
              )
                }
              </button>
            </div>
          </div>


          <button
            type="submit"
            disabled={loginLoading}
            className="
              w-full
              cursor-pointer
              flex items-center justify-center gap-2
              py-3
              mt-2
              rounded-xl
              font-semibold
              text-white
             bg-violet-600
              hover:opacity-90
              transition-all
              disabled:opacity-50
              disabled:cursor-not-allowed
            "
          >
            {loginLoading
              ? "Logging In..."
              : (
                <>
                Login
                <ArrowRight size={18} />
                </>
              )
              }
          </button>
        </form>

      </div>

    </div>

    {/* ================= SIGNUP ================= */}

    <div className="w-1/2 shrink-0 p-8">

      <h2 className="text-3xl font-bold text-white">
        Create Account 
      </h2>

      <p className="mt-2 text-slate-400">
        Start optimizing your resume today.
      </p>

      <div className="mt-8">

        {/* Paste Signup Form Here */}
         <form
          onSubmit={handleSignup}
          className="space-y-5"
        >
         

           <div>
            <label
              className="
                block
                text-xs
                uppercase
                tracking-wider
                text-slate-400
                mb-2
              "
            >
              Full Name
            </label>

            <div className="relative">
              <User
                size={18}
                className="
                  absolute
                  left-4
                  top-1/2
                  -translate-y-1/2
                  text-slate-500
                "
              />

              <input
                type="text"
                name="name"
                placeholder="John Doe"
                value={signupData.name}
                onChange={handleSignupChange}
                required
                className="
                  w-full
                  bg-slate-950
                  border
                  border-slate-800
                  rounded-xl
                  py-3
                  pl-12
                  pr-4
                  text-white
                  outline-none
                  focus:border-violet-400
                  transition-all
                "
              />
            </div>
          </div>

          <div>
            <label
              className="
                block
                text-xs
                uppercase
                tracking-wider
                text-slate-400
                mb-2
              "
            >
              Email Address
            </label>

            <div className="relative">
              <Mail
                size={18}
                className="
                  absolute
                  left-4
                  top-1/2
                  -translate-y-1/2
                  text-slate-500
                "
              />

              <input
                type="email"
                name="email"
                placeholder="name@example.com"
                value={
                  signupData.email
                }
                onChange={
                  handleSignupChange
                }
                required
                className="
                  w-full
                  bg-slate-950
                  border
                  border-slate-800
                  rounded-xl
                  py-3
                  pl-12
                  pr-4
                  text-white
                  outline-none
                  focus:border-violet-400
                  transition-all
                "
              />
            </div>
          </div>


          <div>
            <div
              className="
                flex
                justify-between
                items-center
                mb-2
              "
            >
              <label
                className="
                  text-xs
                  uppercase
                  tracking-wider
                  text-slate-400
                "
              >
                Password
              </label>

             
            </div>

            <div className="relative">
              <Lock
                size={18}
                className="
                  absolute
                  left-4
                  top-1/2
                  -translate-y-1/2
                  text-slate-500
                "
              />

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="••••••••"
                value={
                  signupData.password
                }
                onChange={
                  handleSignupChange
                }
                required
                className="
                  w-full
                  bg-slate-950
                  border
                  border-slate-800
                  rounded-lg
                  py-3
                  pl-12
                  pr-4
                  text-white
                  outline-none
                  focus:border-violet-400
                  transition-all
                "
              />

              <button type="button" onClick={()=> setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white">
                {showPassword ? (
                  <EyeOff size={18}/>
                ) :
              (
                <Eye size={18}/>
              )
                }
              </button>
            </div>
          </div>


          <button
            type="submit"
            disabled={signupLoading}
            className="
              w-full
              cursor-pointer
              flex items-center justify-center gap-2
              py-3
              mt-2
              rounded-xl
              font-semibold
              text-white
              bg-violet-700
              hover:bg-violet-500
              hover:opacity-90
              transition-all
              disabled:opacity-50
              disabled:cursor-not-allowed
            "
          >
            {signupLoading
              ? "Creating Account..."
              : (
                <>
                Create Account
                <ArrowRight size={18} />
                </>
              )
              }
          </button>
        </form>

      </div>

    </div>

  </div>

</div>

</div>

</div>

</section>

 )}

 export default Auth;



