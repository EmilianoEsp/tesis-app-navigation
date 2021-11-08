import React from 'react';

import {Colors} from './../components/styles';
const {primary, tertiary} = Colors ;

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screens
import Inicio from './../screens/Inicio';
import Login from './../screens/Login';
import Signup from './../screens/Signup';
import PantallaCuenta from './../screens/PantallaCuenta';
import PantallaApuntes from './../screens/PantallaApuntes';
import PantallaDonaciones from './../screens/PantallaDonaciones';
import PantallaCarrito from './../screens/PantallaCarrito';

const Stack = createNativeStackNavigator();

const RootStack = () => {
	return(
		<NavigationContainer>
			<Stack.Navigator
				screenOptions = {{
					headerStyle: {
						backgroundColor: 'transparent',
						//shadowOpacity: 0,
						//elevation: 0
					},
					headerTintColor: tertiary,
					headerTransparent: true,
					headerTitle: '',
					headerLeftContainerStyle: {
						paddingLeft: 20
					}
				}}
				initialRouteName = "Login"
			>
				<Stack.Screen options = {{headerTintColor: primary}} name = "Inicio" component = {Inicio} />
				<Stack.Screen name = "Login" component = {Login} />
				<Stack.Screen name = "Signup" component = {Signup} />
				<Stack.Screen name = "Cuenta" component = {PantallaCuenta} />
        		<Stack.Screen name = "Apuntes" component = {PantallaApuntes} />
        		<Stack.Screen name = "Donaciones" component = {PantallaDonaciones} />
        		<Stack.Screen name = "Carrito" component = {PantallaCarrito} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default RootStack;