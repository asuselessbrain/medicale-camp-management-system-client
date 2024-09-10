import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebaseConfig/firebaseConfig";


export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const googleProvider = new GoogleAuthProvider();

    const [user, setUser] = useState('')

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const logInWithEmail = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password)
    }

    useEffect(()=>{
       const unSubscribe =  onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
              console.log(user)
            } else {
              // User is signed out
              // ...
            }
          });
          return ()=> unSubscribe
    },[])

    const authInfo = {
        googleSignIn,
        logInWithEmail,
        user,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;