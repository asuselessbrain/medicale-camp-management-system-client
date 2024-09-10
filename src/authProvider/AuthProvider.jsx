import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { createContext } from "react";
import { auth } from "../firebaseConfig/firebaseConfig";


const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const googleProvider = new GoogleAuthProvider();

    const googleSIgnIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const authInfo = {
        googleSIgnIn,  
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;