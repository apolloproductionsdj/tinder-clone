import React from 'react'
import { View, Text } from 'react-native'
import useAuth from '../hooks/useAuth';

const LoginScreen = () => {
    const { signInWithGoogle } = useAuth();
    console.log(user)

    return (
        <View>
            <Text>I am the login screen</Text>
            <Button title="login" onPress={signInWithGoogle} />
        </View>
    )
}

export default LoginScreen
