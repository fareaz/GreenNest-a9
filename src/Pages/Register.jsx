import React, { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Contexts/AuthContext";
import { toast } from "react-toastify";

const Register = () => {
  const { register, setUser, updateUser, emailVerification, logOut ,setLoading,   signInWithGoogle } =
    useContext(AuthContext);

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/";

  const handleRegister = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const photo = event.target.photo.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    setError("Please enter a valid email address.");
    toast.error("Please enter a valid email address.");
    return;
  }

    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordPattern.test(password)) {
      setError(
        "Password must include uppercase and lowercase(min 6 chars)."
      );
      return;
    }

    setError("");
    setSuccess(false);

  
    register(email, password)
      .then((users) => {
        const user = users.user;
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            return emailVerification(user);
          })
          .then(() => {
            toast.success(
              "Register successful! We've sent a verification link to your email. Please verify your account before logging in."
            );
            setSuccess(true);
            event.target.reset();
            if (typeof logOut === "function") {
              logOut().then(() => {
                setUser(null);
                navigate("/auth", { replace: true }); 
              });
            } else {
              navigate(from, { replace: true });
            }
          })
          .catch((err) => {
    
            setError(err.message);
            toast.error(err.message);
          });
      })
      .catch(() => {
        setError("Email-already-in-use");
        toast.error("Email-already-in-use");
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
        .catch(() => {

          setError( "Google sign-in failed");
          toast.error("Google sign-in failed");
        })
        .finally(() => {
          setLoading(false);
        });
    };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col">
        <div className="text-center mb-4">
          <h1 className="text-5xl font-bold text-green-700">Register Now!</h1>
         
        </div>

        <div className="card rounded-xl border border-emerald-200 bg-emerald-50/50 w-full max-w-sm shrink-0 shadow-xl">
          <div className="card-body">
            <form onSubmit={handleRegister}>
              <fieldset className="fieldset">
                <label className="block font-semibold text-emerald-900">Name</label>
                <input
                  type="text"
                  name="name"
                   className="input ext-gray-500  rounded-lg border border-emerald-200 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-300 text-gray-500"
                  placeholder="Your Name"
                  required
                />

                <label className="block font-semibold text-emerald-900">Photo URL</label>
                <input
                  type="url"
                  name="photo"
                   className="input ext-gray-500  rounded-lg border border-emerald-200 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-300 text-gray-500"
                  placeholder="Photo URL"
                />

                <label className="block font-semibold text-emerald-900">Email</label>
                <input
                  type="email"
                  name="email"
                   className="input ext-gray-500  rounded-lg border border-emerald-200 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-300 text-gray-500"
                  placeholder="Email Address"
                  required
                />

                <label className="block font-semibold text-emerald-900">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    className="input ext-gray-500  rounded-lg border border-emerald-200 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-300 text-gray-500"
                    placeholder="Password"
                    autoComplete="new-password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="btn-xs border-0 top-4 right-3 absolute"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>

                <button
                  type="submit"
                  className="mt-4 w-full btn bg-gradient-to-r from-[#16A34A] to-[#4ADE80] text-white font-bold hover:text-green-900"
                >
                  Register
                </button>
                <button
                  type="button"
                  onClick={handleGoogleSignIn}
                  className="flex items-center border  justify-center gap-3 bg-white text-gray-800 px-5 py-2 btn w-full font-semibold hover:bg-gray-100 transition-colors cursor-pointer my-2"
                >
                  <img
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    alt="google"
                    className="w-5 h-5"
                  />
                  Continue with Google
                </button>

                {success && (
                  <p className="text-green-600 text-center mt-2 max-w-70">
                    Account created successfully. Please verify your email.
                  </p>
                )}
                {error && (
                  <p className="text-red-500 text-center mt-2 max-w-70">{error}</p>
                )}
              </fieldset>
            </form>

            <p className=" text-center">
              Already have an account?{" "}
              <Link className="text-green-500 underline" to="/auth">
                Login 
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
