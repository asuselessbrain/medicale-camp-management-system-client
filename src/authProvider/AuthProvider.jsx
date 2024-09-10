import { createContext } from "react";


const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const authInfo = {
         name: "Arfan",   
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;