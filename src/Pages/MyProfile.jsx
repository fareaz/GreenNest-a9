import { useContext, useEffect, useState } from "react";
import UserLogo from "../assets/user.png";
import { AuthContext } from "../Contexts/AuthContext";
import { toast } from "react-toastify";
import { auth } from "../FireBase/fireBase.init"; // যদি দরকার হয় reload-এর জন্য

const MyProfile = () => {
  const { user, setUser, updateUser, refreshUser } = useContext(AuthContext);

  
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState( "");

  useEffect(() => {
    setName(user?.displayName || "");
    setPhoto(user?.photoURL || "");
  }, [user]);

  const handleUpdate = () => {
    if (!user) return toast.error("No user logged in");

    updateUser({
      displayName: name,
      photoURL: photo,
    })
      .then(() => (refreshUser ? refreshUser() : auth.currentUser?.reload()))
      .then(() => {
        
        if (!refreshUser && auth.currentUser) {
          setUser({ ...auth.currentUser });
        }
        toast.success("Profile updated successfully");
      })
      .catch((error) => {
        console.error(error);
        toast.error(error?.message || "Error updating profile");
      });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="border border-emerald-200 bg-emerald-50/50 shadow-lg rounded-2xl p-8 w-10/12 md:flex justify-between">
        <div className="flex flex-col items-center">
          <img
            src={user?.photoURL || UserLogo}  
            alt="User avatar"
            className="w-24 h-24 rounded-full mb-4 border-2 border-green-500 object-cover"
          />
          <h2 className="text-2xl font-semibold text-gray-800 mb-1">
            {user?.displayName || "No Name"}
          </h2>
          <p className="text-gray-500">{user?.email || "No Email"}</p>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-medium text-emerald-900 mb-2">
            Update Profile
          </h3>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Update Name"
            className="mb-3 w-full rounded-lg border border-emerald-200 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-400 text-gray-700"
          />

          <input
            type="text"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
            placeholder="Update Photo URL"
            className="mb-3 w-full rounded-lg border border-emerald-200 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-400 text-gray-700"
          />

          <button
            onClick={handleUpdate}
            className="w-full btn hover:text-green-900 bg-gradient-to-r from-[#16A34A] to-[#4ADE80] text-white font-bold"
          >
            Update Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
