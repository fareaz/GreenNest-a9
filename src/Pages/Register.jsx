import React, { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Contexts/AuthContext";
import { toast } from "react-toastify";

const Register = () => {

  const { register, setUser, updateUser,emailVerification } = useContext(AuthContext);

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/";

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value.trim();
    const password = form.password.value;
    const name = form.name.value.trim();
    const photo = form.photo.value.trim();

    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/;

    if (!passwordPattern.test(password)) {
      setError(
        "Password must be at least 6 characters, incl. uppercase, lowercase & special char."
      );
      return;
    }

    setError("");
    setSuccess(false);

    register(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
          return updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            emailVerification()    .then(() => {
                      toast('Please login to your email and verify your email address')
                    })
            setUser({ ...user, displayName: name, photoURL: photo });
            setSuccess(true);
            toast.success("Register successful!");
            form.reset();

          
            navigate(from, { replace: true });

          
          });
      })
      .catch((err) => {
        console.error(err);
        setError(err.message || "Registration failed");
        toast.error(err.message || "Registration failed");
        form.reset();
      });
  };

  const handleTogglePasswordShow = (event) => {
    event.preventDefault();
    setShowPassword((s) => !s);
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col ">
        <div className="text-center ">
          <h1 className="text-5xl font-bold">Register now!</h1>
        </div>

        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleRegister}>
              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input type="text" name="name" className="input" placeholder="Your Name" required />

                <label className="label">Photo URL</label>
                <input type="url" name="photo" className="input" placeholder="Photo URL" />

                <label className="label">Email</label>
                <input type="email" name="email" className="input" placeholder="Email" required />

                <label className="label">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    autoComplete="new-password"
                    className="input"
                    placeholder="Password"
                    required
                  />
    
                  <button
                    type="button"
                    onClick={handleTogglePasswordShow}
                    className="btn-xs border-0 top-4 right-3 absolute"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>

                <button className="mt-2 w-full btn hover:text-green-900 bg-gradient-to-r from-[#16A34A] to-[#4ADE80] text-white font-bold">
                  Register
                </button>

                {success && <p className="text-green-500">Account created successfully.</p>}
                {error && <p className="text-red-500 max-w-80">{error}</p>}
              </fieldset>
            </form>

            <p className="mt-2">
              Already have an account? Please{" "}
              <Link className="text-green-400 underline" to="/auth">
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