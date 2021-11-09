import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { View, Text, Button } from 'react-native'

const HomeScreen = () => {
    const navigation = useNavigation();
    return (
        <View>
            <Text>I am the HomeScreen</Text>
            <Button onPress={() => navigation.navigate('Chat')} title="Go to Chat Screen" />
        </View>
    )
}

export default HomeScreen
