import React from "react";

const AuthContext = React.createContext({
    isLoggedIn: false,
    userId: ""
});


export const AuthContextProvider = props => {

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn: false,
                userId: "60d0fe4f5311236168a109ca"
            }}
        >
            {props.children}
        </AuthContext.Provider >
    );
}

export default AuthContext;
