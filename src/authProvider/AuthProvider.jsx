import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { createContext, useEffect } from "react";
import { auth } from "../firebaseConfig/firebaseConfig";


export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const googleProvider = new GoogleAuthProvider();

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(()=>{
       const unSubscribe =  onAuthStateChanged(auth, (user) => {
            if (user) {
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
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;