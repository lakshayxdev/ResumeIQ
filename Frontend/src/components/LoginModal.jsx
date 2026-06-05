import { useState } from "react";
import { Mail, Lock, X, ArrowRight, Eye, EyeOff } from "lucide-react";
import Modal from "./Modal";
import api from "./api";
import toast from "react-hot-toast";

const LoginModal = ({
  isOpen,
  onClose,
  openSignup,
}) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] =
    useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const { data } = await api.post(
        "/api/auth/login",
        formData
      );

      localStorage.setItem(
        "token",
        data.token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      );

      toast.success("Login successful");
      onClose();

      window.location.reload();
      
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const [showPassword, setShowPassword] = useState(false)

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
    >
      <div
        className="
          relative
          w-full
          max-w-md
          rounded-3xl
          border
          border-white/10
          bg-slate-900/95
          backdrop-blur-xl
          p-8
          shadow-[0_0_60px_rgba(59,130,246,0.15)]
        "
      >
       

        <button
          onClick={onClose}
          className="
            absolute
            top-5
            right-5
            text-slate-400
            hover:text-white
            transition
          "
        >
          <X size={20} />
        </button>

        

        <div className="text-center mb-8">
          <h2
            className="
              text-4xl
              font-bold
              text-white
            "
          >
            Welcome Back
          </h2>

          <p
            className="
              text-slate-400
              mt-3
            "
          >
            Sign in to continue your ATS
            optimization journey
          </p>
        </div>


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
                  formData.email
                }
                onChange={
                  handleChange
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
                  focus:border-cyan-400
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
                  formData.password
                }
                onChange={
                  handleChange
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
                  focus:border-cyan-400
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
            disabled={loading}
            className="
              w-full
              cursor-pointer
              flex items-center justify-center gap-2
              py-3
              mt-2
              rounded-xl
              font-semibold
              text-white
              bg-linear-to-r
              from-violet-600
via-purple-600
to-fuchsia-600
hover:from-violet-500
hover:via-purple-500
hover:to-fuchsia-500
              hover:opacity-90
              transition-all
              disabled:opacity-50
            "
          >
            {loading
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

      

        <p
          className="
            text-center
            text-slate-400
            mt-8
          "
        >
          Don't have an account?

          <button
            onClick={openSignup}
            className="
              ml-2
              cursor-pointer
              text-violet-400
              font-semibold
              hover:text-violet-300
            "
          >
            Sign Up
          </button>
        </p>

        <div
          className="
            mt-8
            border-t
            border-slate-800
          "
        />
      </div>
    </Modal>
  );
};

export default LoginModal;