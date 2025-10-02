import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    var login = localStorage.getItem("isLogin");
    var userInfoData = localStorage.getItem("userInfo");

    const [isLogin, setIsLogin] = useState(login? login : false);
    const [user, setUser] = useState(userInfoData ? JSON.parse(userInfoData) : null);

    return (
        <AuthContext.Provider value={{isLogin, setIsLogin, user, setUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;