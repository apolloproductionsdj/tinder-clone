import React, { createContext, useContext } from 'react';
import { View, Text } from 'react-native';
import * as Google from "expo-google-app-auth";

const AuthContext = createContext({});

const config = {
    androidClientId: '621676818186-edkbtpiq9cempf11f1c6tsco4rt8l3ag.apps.googleusercontent.com',
    iosClientId: '621676818186-ub6agv23oq5f7ja15bfsi9n1ett6m5pe.apps.googleusercontent.com',
    scopes: ["profile", "email"],
    permissions: ["public_profile", "email", "gender", "location"],
}
const signInWithGoogle = async () => {
    Google.logInAsync(config).then(async (logInResult) => {
        if (logInResult.type === 'success') {

        }

    })

}

export const AuthProvider = ({ children }) => {



    return (
        <AuthContext.Provider value={{
            user: null,
            signInWithGoogle,
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default function useAuth() {
    return useContext(AuthContext);
}