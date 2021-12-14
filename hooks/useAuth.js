import React, { createContext, useContext, useEffect, useState } from 'react';
import * as Google from 'expo-google-app-auth';
import { GoogleAuthProvider, onAuthStateChanged, signInWithCredential, signOut } from '@firebase/auth';
import { auth } from '../firebase';

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {

    const [error, setError] = useState(null);
    const [user, setUser] = useState(null);
    const [loadingInitial, setLoadingInitial] = useState(true);

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => {
            if (user) {
                // Logged in...
                setUser(user)
            } else {
                setUser(null);
            }
            setLoadingInitial(false)
        });

        return unsub();
    }, []);

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
        }).catch(error => setError(error));
    }

    return (
        <AuthContext.Provider value={{
            user,
            signInWithGoogle
        }}>
            {!loadingInitial && children}
        </AuthContext.Provider>
    );
};

export default function useAuth() {
    return useContext(AuthContext);
}