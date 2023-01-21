import { createContext, useState } from "react";

const initState = {
    isAuth:false,
    token:null
}

export const AuthContext = createContext()


const AuthContextProvider = ({children}) => {
    const [authState, setAuthState] = useState(initState);
   
const handleLogin = (token)=>{
    setAuthState({...authState, isAuth:true, token})
}
const handleLogout = (token)=>{
    setAuthState({...authState, isAuth:false, token:null})
    
}
  return (
    <AuthContext.Provider value={{authState, handleLogin, handleLogout}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider