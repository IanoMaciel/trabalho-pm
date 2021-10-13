import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Home } from './src/view/Home';
import { Municipio } from './src/view/Municipio';

const Stack = createNativeStackNavigator();

 export default function App()
 {
     return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerTitleAlign: 'center'
                }}
            >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Municipio" component={Municipio} />
            </Stack.Navigator>
        </NavigationContainer>
     );
 }