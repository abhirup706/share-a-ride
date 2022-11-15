import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import MapScreen from '../screens/MapScreen';
import SuccessScreen from '../screens/SuccessScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import UploadScreen from '../screens/UploadScreen';
import InspectionForm from '../screens/InspectionForm';
import VerificationScreen from '../screens/VerificationScreen';
import VerifiedScreen from '../screens/VerifiedScreen';
import TextInputModal from '../screens/TextInputModal';
import WelcomeScreen from '../screens/WelcomeScreen';
import SelectCarScreen from '../components/SelectCarScreen';
import MapScreenProvider from '../screens/MapScreenProvider';
import SuccessScreenProvider from '../screens/SuccessScreenProvider';

const Stack = createStackNavigator();

const MainNavigator = () => {
    return (
        <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="SignupScreen" component={SignupScreen} />
            <Stack.Screen name="UploadScreen" component={UploadScreen} />
            <Stack.Screen name="InspectionForm" component={InspectionForm} />
            <Stack.Screen name="VerificationScreen" component={VerificationScreen} />
            <Stack.Screen name="VerifiedScreen" component={VerifiedScreen} />
            <Stack.Screen name="TextInputModal" component={TextInputModal} />
            <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="MapScreen" component={MapScreen} />
            <Stack.Screen name="MapScreenProvider" component={MapScreenProvider} />
            <Stack.Screen name="SuccessScreen" component={SuccessScreen} />
            <Stack.Screen name="SuccessScreenProvider" component={SuccessScreenProvider} />
            
        </Stack.Navigator>
    );
}

export default MainNavigator;
