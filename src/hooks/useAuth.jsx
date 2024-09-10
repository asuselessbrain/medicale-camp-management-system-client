import { useContext } from "react";
import AuthProvider from "../authProvider/AuthProvider";

const useAuth = () => {

    const auth = useContext(AuthProvider)
    return  auth
};

export default useAuth;