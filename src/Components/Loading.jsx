import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50 text-center">
      <div className="w-16 h-16 border-4 border-green-400 border-t-transparent rounded-full animate-spin mb-6"></div>
      <h2 className="text-2xl font-semibold text-green-600">
        Loading, please wait...
      </h2>
     
    </div>
  );
};

export default Loading;