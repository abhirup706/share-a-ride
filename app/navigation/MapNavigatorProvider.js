import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SelectCarScreen from '../components/SelectCarScreen';
import NavigateCard2 from '../components/NavigateCard2';
import RideOptionsCard2 from '../components/RideOptionsCard2';
import RiderDetails from '../components/RiderDetails';

const Stack = createStackNavigator();

const MapNavigatorProvider = () => {
    return (
        <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="SelectCarScreen" component={SelectCarScreen} />
            <Stack.Screen name="NavigateCard2" component={NavigateCard2} />
            <Stack.Screen name="RideOptionsCard2" component={RideOptionsCard2}/>
            <Stack.Screen name="RiderDetails" component={RiderDetails}/>
        </Stack.Navigator>
    );
}

export default MapNavigatorProvider;
