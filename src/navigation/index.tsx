import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FAQScreen from '../screens/FAQ';

const Stack = createStackNavigator();

export default function AppStack() {
    return (
        <Stack.Navigator headerMode={null}>
            <Stack.Screen component={FAQScreen} name="FAQ" />
        </Stack.Navigator>
    )
}