import { Children, createContext, useContext, useState } from "react";
const AuthContext=createContext(null);
// defining the auth provieder component to maintain state log in an dlog out
const AuthProvider=({children})=>{
    const[user,setuser]=useState(null)
    const login=(userData)=>{
        setuser(userData);

    }
    const logout=()=>{
        setuser(null)
    }
    //now we will provide these values using authcontext provider
    return <AuthContext.Provider value={{user,login,logout}}>{children}</AuthContext.Provider>
}

//now defining the  funvtion that will return the value of authProvider
export const useAuth=()=>{
    return useContext(AuthContext);
}
export default AuthProvider
