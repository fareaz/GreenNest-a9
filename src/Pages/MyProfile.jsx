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
      <div className="bg-white shadow-lg rounded-2xl p-8 w-10/12 md:flex justify-between ">
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

        <div className="mt-6">
          <h3 className="text-lg font-medium text-gray-700 mb-2">
            Update Profile
          </h3>
          <input
            type="text"
            value={name}
            // onChange={(e) => setName(e.target.value)}
            placeholder="New display name"
            className="w-full border rounded-lg px-3 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="text"
            // value={photo}
            // onChange={(e) => setPhoto(e.target.value)}
            placeholder="New photo URL"
            className="w-full border rounded-lg px-3 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-green-400"
          />

          <button
            // onClick={handleUpdate}
            className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg transition-all"
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