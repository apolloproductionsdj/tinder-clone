import React, { createContext, useContext } from 'react';
import * as Google from 'expo-google-app-auth';
import { GoogleAuthProvider, onAuthStateChanged, signInWithCredential, signOut } from '@firebase/auth';
import { auth } from '../firebase';

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {



    const config = {
        iosClientId: '621676818186-ub6agv23oq5f7ja15bfsi9n1ett6m5pe.apps.googleusercontent.com',
        androidCliendId: '621676818186-edkbtpiq9cempf11f1c6tsco4rt8l3ag.apps.googleusercontent.com',
        scopes: ["profile", "email"],
        permissions: ["public_profile", "email", "gender", "location"],
    }

    const signInWithGoogle = async () => {
        await Google.logInAsync(config).then(async (logInResult) => {
            if (logInResult.type === 'success') {
                const { idToken, accessToken } = logInResult;
                const credential = GoogleAuthProvider.credential(idToken, accessToken);
                await signInWithCredential(auth, credential);
            }

            return Promise.reject();
        });
    }

    return (
        <AuthContext.Provider value={{
            user: null,
            signInWithGoogle
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export default function useAuth() {
    return useContext(AuthContext);
}