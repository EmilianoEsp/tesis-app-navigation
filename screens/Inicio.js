import React from 'react';
import { StatusBar } from 'expo-status-bar';

import {
	InnerContainer,
	PageTitle,
	SubTitle,
	StyledFormArea,
	StyledButton,
	ButtonText,
	Line,
	WelcomeContainer,
	WelcomeImage,
	Avatar
} from './../components/styles';

const Inicio = ({navigation}) => {

	return (
		<>
			<StatusBar style = "light" />
			<InnerContainer>
			<WelcomeImage resizeMode = "cover" source = {require('./../assets/img/background-app.png')} />
				<WelcomeContainer>
					<PageTitle welcome = {true}>Bienvenido/a!</PageTitle>
					<SubTitle welcome = {true}>Emiliano Espinosa</SubTitle>
					<SubTitle welcome = {true}>emiespinosa0217@gmail.com</SubTitle>

					<StyledFormArea>
						<Avatar resizeMode = "cover" source = {require('./../assets/img/logo-app.png')} />
						<Line />
						<StyledButton onPress = {() => {navigation.navigate("Login")}}>
							<ButtonText>Cerrar Sesión</ButtonText>
						</StyledButton>
						
					</StyledFormArea> 
					</WelcomeContainer>
			</InnerContainer>
		</>
	);
};

export default Inicio;