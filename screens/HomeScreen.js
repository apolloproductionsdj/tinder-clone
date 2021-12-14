import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { View, Text, Button } from 'react-native'
import useAuth from '../hooks/useAuth';

const HomeScreen = () => {
    const navigation = useNavigation();

    const { logout } = useAuth();

    return (
        <View>
            <Text>I am the HomeScreen</Text>
            <Button onPress={() => navigation.navigate('Chat')} title="Go to Chat Screen" />

            <Button title="Logout" onPress={logout} />
        </View>
    )
}

export default HomeScreen
