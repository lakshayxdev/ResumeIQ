import { useState } from "react";
import toast from "react-hot-toast";
import {
  User,
  Mail,
  Lock,
  X,
  ArrowRight,
  Eye, EyeOff
} from "lucide-react";

import Modal from "./Modal";
import api from "./api";

const SignupModal = ({
  isOpen,
  onClose,
  openLogin,
}) => {
  const [formData, setFormData] =
    useState({
      name: "",
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

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await api.post(
        "/api/auth/signup",
        formData
      );

      openLogin();
    } catch (err) {
      toast.error("Something went wrong");
      console.log("error :", err);
    } finally {
      setLoading(false);
    }
  };

  const [showPassword, setShowPassword] = useState(false);

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
            Create Account
          </h2>

          <p
            className="
              text-slate-400
              mt-3
            "
          >
            Begin your AI-powered
            career journey today.
          </p>
        </div>

       

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
                value={formData.name}
                onChange={handleChange}
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
                type="text"
                name="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
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
              Password
            </label>

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
                type= {showPassword ? "text" : "password" }
                name="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
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

        <p
          className="
            text-center
            text-slate-400
            mt-8
          "
        >
          Already have an account?

          <button
            onClick={openLogin}
            className="
              ml-2
              text-violet-400
              font-semibold
              cursor-pointer
              hover:text-violet-300
            "
          >
            Login
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

export default SignupModal;