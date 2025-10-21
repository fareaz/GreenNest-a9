import React from "react";
import { Link } from "react-router";


const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50 text-center px-4">
      <h1 className="text-9xl font-extrabold text-green-600">404</h1>
      <h2 className="text-3xl font-semibold text-green-700 mt-4">
        Oops! Page Not Found
      </h2>
      <p className="text-green-500 mt-2 max-w-md">
        The page you're looking for doesn't exist or has been moved.
      </p>

      <Link
        to="/"
        className="mt-6 bg-gradient-to-r from-green-600 to-emerald-400 text-white px-6 py-2 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-500 transition-all"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;