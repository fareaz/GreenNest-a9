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

import React, {  useEffect, useState } from "react";
import { auth } from "../FireBase/fireBase.init";
import { AuthContext } from "./AuthContext";





const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const register = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    return signOut(auth);
  };
  const userLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const updateUser = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData);
  };
  const Verification = () => {
    setLoading(true);
    return sendEmailVerification(auth.currentUser);
  };
  const sendPassResetEmail = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };
  const refreshUser = () => {
  if (!auth.currentUser) return Promise.resolve();
  return auth.currentUser.reload().then(() => {
    setUser({ ...auth.currentUser });
  });
};

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const authData = {
    user,
    setUser,
    register,
    logOut,
    userLogin,
    loading,
    setLoading,
    updateUser,
    signInWithGoogle,
   Verification,
    sendPassResetEmail,
    refreshUser
  };

  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;