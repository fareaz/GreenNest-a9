import { useContext, useRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate, useLocation } from "react-router";
import { AuthContext } from "../Contexts/AuthContext";
import { toast } from "react-toastify";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const emailRef = useRef();

  const {
    userLogin,
    forgetPassword,
    signInWithGoogle,
    setLoading,
  } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/";

 const handleLogin = (e) => {
  e.preventDefault();
  const email = e.target.email.value;
  const password = e.target.password.value;
  setError("");
  setLoading(true);
  userLogin(email, password)
    .then((result) => {
      const user = result.user;
      user
        .reload()
        .then(() => {
          if (!user.emailVerified) {
            toast.warn("Please verify your email before logging in.");
            setError("Your email is not verified. ");
            if (typeof result.user?.auth?.signOut === "function") {
              result.user.auth.signOut();
            }
            setLoading(false);
            return;
          }

          toast.success("Login successful!");
          navigate(from, { replace: true });
        })
       
    })
    .catch(() => {

      setError("Please check your email and password and try again. If you don't have an account, please sign up.");
      toast.error("Please check your email and password and try again. If you don't have an account, please sign up.");
    })
    .finally(() => {
      setLoading(false);
    });
};

  const handleGoogleSignIn = () => {
    setError("");
    setLoading(true);
    signInWithGoogle()
      .then(() => {     
        toast.success("Signin successful");
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setError(err.message);
        toast.error(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };


  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    if (!email) {
      toast.info("Please enter your email first.");
      return;
    }

  forgetPassword(email)
      .then(() => {
        toast.success("Password reset email sent. Please check your inbox.");
      })
      .catch(() => {
        toast.error("Could not send reset email.");
      });
  };

  const handleTogglePasswordShow = (event) => {
    event.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h3 className="text-4xl font-bold text-emerald-600">Login Now</h3>
        </div>

        <div className="card w-full max-w-sm shrink-0 shadow-xl rounded-xl border border-emerald-200 bg-emerald-50/50">
          <div className="card-body">
            <form onSubmit={handleLogin}>
              <fieldset className="fieldset">
                <label className="block font-semibold text-emerald-900">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input ext-gray-500  rounded-lg border border-emerald-200 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-300 text-gray-500"
                  ref={emailRef}
                  placeholder="Email"
                  required
                />

                <label className="block font-semibold text-emerald-900">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    className="input ext-gray-500  rounded-lg border border-emerald-200 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-300 text-gray-500"
                    autoComplete="new-password" 
                    placeholder="Password"
                    required
          
                  />
                  <button
                    onClick={handleTogglePasswordShow}
                    type="button"
                    className="btn-xs border-0 top-4 right-3 absolute text-gray-500 "
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>

                <div>
                  <button
                    type="button"
                    className="link link-hover block font-semibold text-emerald-900"
                    onClick={handleForgetPassword}
                  >
                    Forgot password?
                  </button>
                </div>

                <button className="mt-3 w-full btn hover:text-green-900 bg-gradient-to-r from-[#16A34A] to-[#4ADE80] text-white font-bold">
                  Login
                </button>

                <button
                  type="button"
                  onClick={handleGoogleSignIn}
                  className="flex items-center border justify-center gap-3 bg-white text-gray-800 px-5 py-2 btn w-full font-semibold hover:bg-gray-100 transition-colors cursor-pointer my-2"
                >
                  <img
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    alt="google"
                    className="w-5 h-5"
                  />
                  Continue with Google
                </button>
              </fieldset>

              <p className="mt-2">
                New to our Website? Please{" "}
                <Link className="text-green-400 underline " to="/auth/register">
                  Signup
                </Link>
              </p>
              </form>

            {error && <p className="text-red-500 mt-2 max-w-70">{error}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
