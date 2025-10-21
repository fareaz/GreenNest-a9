// import React, { useRef, useState } from 'react';

import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  //   const [error, setError] = useState('');
  // const emailRef = useRef();
  //   const handleLogin = e => {
  //     e.preventDefault();
  //     const email = e.target.email.value;
  //     const password = e.target.password.value;
  //     console.log(email, password)

  //     setError('');

  //     signInWithEmailAndPassword(auth, email, password)
  //         .then(result => {
  //             console.log(result.user);
  //             if (!result.user.emailVerified) {
  //                 alert('Please verify your email address')
  //             }
  //         })
  //         .catch(error => {
  //             console.log(error.message);
  //             setError(error.message)
  //         })
  // }

  // const handleForgetPassword = () => {
  //     const email = emailRef.current.value;
  //     console.log('forget password', email)
  //     sendPasswordResetEmail(auth, email)
  //         .then(() => {
  //             alert('please check your email')
  //         })
  //         .catch()
  // }
  const handleTogglePasswordShow = (event) => {
    event.preventDefault();
    setShowPassword(!showPassword);
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col ">         
         <div className="text-center ">
                    <h3 className="text-4xl font-bold">Login now!</h3>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
         <div className="card-body"> {/* <form onSubmit={handleLogin}> */}
          <form>
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                // ref={emailRef}
                placeholder="Email"
              />
              <label className="label">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="input"
                  placeholder="Password"
                />
                <button
                  onClick={handleTogglePasswordShow}
                  className=" btn-xs border-0 top-4 right-3 absolute"
                >
                  {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                </button>
              </div>
              <div>
                {/* <a className="link link-hover" onClick={handleForgetPassword}>Forgot password?</a> */}
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn mt-3 bg-green-500 text-white/70">Login</button>
              <button
                type="button"
                // onClick={handleGoogleSignin}
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
            <p>
            New to our Website? Please{" "}
            <Link className="text-blue-400 underline" to="/auth/register">
              Register
            </Link>
          </p>
          </form></div>
         
          {/* {
                    error && <p className='text-red-500'>{error}</p>
                } */}
          
        </div>
      </div>
    </div>
  );
};

export default Login;
