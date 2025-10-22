// import React, { useContext, useState } from "react";
// import { AuthContext } from "../Provider/AuthProvider";
// import { updateProfile } from "firebase/auth";
import UserLogo from "../assets/user.png"

const MyProfile = () => {
// //   const { user, setUser } = useContext(AuthContext);
//   const [name, setName] = useState(user?.displayName || "");
//   const [photo, setPhoto] = useState(user?.photoURL || "");
//   const [message, setMessage] = useState("");

//   const handleUpdate = () => {
//     if (!user) return alert("No user logged in");

//     updateProfile(user, {
//       displayName: name,
//       photoURL: photo,
//     })
//       .then(() => {
//         setUser({ ...user, displayName: name, photoURL: photo });
//         setMessage("Profile updated successfully ✅");
//       })
//       .catch((error) => {
//         console.error(error);
//         setMessage("Error updating profile ❌");
//       });
//   };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className=" border border-emerald-200 bg-emerald-50/50 shadow-lg rounded-2xl p-8 w-10/12 md:flex justify-between ">
        <div className="flex flex-col items-center">
          <img
            // src={user?.photoURL || "https://via.placeholder.com/100"}
            src={UserLogo}
            alt=""
            className="w-24 h-24 rounded-full mb-4 border-2 border-green-500"
          />
          <h2 className="text-2xl font-semibold text-gray-800 mb-1">
            {/* {user?.displayName || "No Name"} */} name
          </h2>
          {/* <p className="text-gray-500">{user?.email || "No Email"}</p> */}
          <p className="text-gray-500"> "No Email"</p>
        </div>

        <div className="mt-6 ">
          <h3 className="text-lg font-medium  text-emerald-900 mb-2">
            Update Profile
          </h3>
          <input
            type="text"
            // value={name}
            // onChange={(e) => setName(e.target.value)}
            placeholder="Update Name"
            className="mb-3 w-full ext-gray-500  rounded-lg border border-emerald-200 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-400 text-gray-500 "
          />
          <input
            type="text"
            // value={photo}
            // onChange={(e) => setPhoto(e.target.value)}
            placeholder="Update Photo "
            className="mb-3 w-full ext-gray-500  rounded-lg border border-emerald-200 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-400 text-gray-500 "
          />

          <button
            // onClick={handleUpdate}
            className="w-full btn hover:text-green-900 bg-gradient-to-r from-[#16A34A] to-[#4ADE80] text-white font-bold"
          >
            Update Profile
          </button>

          {/* {message && (
            <p className="mt-3 text-center text-sm text-green-600">
              {message}
            </p>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;