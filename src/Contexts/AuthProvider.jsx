import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { useEffect, useState } from "react";

import { AuthContext } from "./AuthContext";
import { auth } from "../FireBase/fireBase.init";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
 
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const register = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const userLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const updateUser = (updatedData) => {
   
    return updateProfile(auth.currentUser, updatedData);
  };

  const forgetPassword = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };

 const emailVerification = (user) => {
 return sendEmailVerification(user);
};

const refreshUser = () => {
  if (!auth.currentUser) return Promise.resolve(null);
  return auth.currentUser
    .getIdToken(true)
    .then(() => auth.currentUser.reload())
    .then(() => {
      const u = auth.currentUser ? { ...auth.currentUser } : null;
      setUser(u);
      return u;
    });
};

 
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const authData = {
    user,
    setUser,
    loading,
    setLoading,
    register,
    userLogin,
    signInWithGoogle,
    logOut,
    updateUser,
    forgetPassword,
    emailVerification,
    refreshUser,
  };

  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

