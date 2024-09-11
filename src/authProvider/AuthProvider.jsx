import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebaseConfig/firebaseConfig";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)

  // sign in with google
  const googleSignIn = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider);
  };

  // sign in with email and password
  const logInWithEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // update user profile
  const updateUser = (name, image) => {
    setLoading(true)
    return updateProfile(auth.currentUser, {
      displayName: name, photoURL: image
    })
  };

  // sign Out user

  const logOut = () => {
    setLoading(true)
    setUser(null)
    return signOut(auth)
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        console.log(user);
      } else {
        // User is signed out
        // ...
      }
      setLoading(false)
    });
    return () => unSubscribe;
  }, []);

  const authInfo = {
    googleSignIn,
    logInWithEmail,
    updateUser,
    user,
    logOut,
    loading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
