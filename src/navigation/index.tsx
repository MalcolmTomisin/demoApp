import React from 'react';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';
import FAQScreen from '../screens/FAQ';
import {Text, Image} from 'react-native';
import {globalStyles, colors} from '../utils';
import { styles } from '../components/Header/components/styles';
import back from '../../assets/drawables/ic_back.png';

const Stack = createStackNavigator();

export default function AppStack() {
    return (
        <Stack.Navigator headerMode="screen">
            <Stack.Screen component={FAQScreen} name="FAQ" options={() => ({
                headerTitle: ({allowFontScaling, style, children}) => <Text style={styles.title}>{children}</Text>,
                headerTitleAlign: 'center',
                headerLeft: ({tintColor}) => (
                    <HeaderBackButton>
                        <Image style={styles.backButton} source={back} />
                    </HeaderBackButton>
                )
            })} />
        </Stack.Navigator>
    )
}