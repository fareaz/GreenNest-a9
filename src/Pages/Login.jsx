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
    const email = e.target.email.value.trim();
    const password = e.target.password.value;
    setError("");
    setLoading(true);

    userLogin(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user)
        toast.success("Login successful");
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.error(err);
        setError(err.message );
        toast.error(err.message );
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleGoogleSignIn = () => {
    setError("");
    setLoading(true);

    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        toast.success("Signin successful");
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.error(err);
        setError(err.message || "Google sign-in failed");
        toast.error(err.message || "Google sign-in failed");
      })
      .finally(() => {
        setLoading(false);
      });
  };

// const handleForgetPassword = () => {
//         const email = emailRef.current.value;
//         console.log('forget password', email)
//         sendPasswordResetEmail(auth, email)
//             .then(() => {
//                 alert('please check your email')
//             })
//             .catch()
//     }

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
      .catch((err) => {
        console.error(err);
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
          <h3 className="text-4xl font-bold">Login now!</h3>
        </div>

        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleLogin}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  ref={emailRef}
                  placeholder="Email"
                  required
                />

                <label className="label">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    className="input"
                    autoComplete="new-password" 
                    placeholder="Password"
                    required
          
                  />
                  <button
                    onClick={handleTogglePasswordShow}
                    type="button"
                    className="btn-xs border-0 top-4 right-3 absolute"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>

                <div>
                  <button
                    type="button"
                    className="link link-hover"
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
                <Link className="text-green-400 underline" to="/auth/register">
                  Register
                </Link>
              </p>
</form>

            {error && <p className="text-red-500 mt-2">{error}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
