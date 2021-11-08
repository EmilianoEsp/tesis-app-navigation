import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';

// formik
import {Formik} from 'formik';

// icons
import {Octicons, Ionicons, Fontisto} from '@expo/vector-icons';

import {
	StyledContainer,
	InnerContainer,
	PageLogo,
	PageTitle,
	SubTitle,
	StyledFormArea,
	LeftIcon,
	StyledInputLabel,
	StyledTextInput,
	RightIcon,
	StyledButton,
	ButtonText,
	MsgBox,
	Line,
	ExtraView,
	ExtraText,
	TextLink,
	TextLinkContent,
	Colors
} from './../components/styles';
import {View, ActivityIndicator } from 'react-native';

// colors
const {brand, darkLight, primary} = Colors;

// keyboard avoiding view
import KeyboardAvoidingWrapper from './../components/KeyboardAvoidingWrapper';

// API client
import axios from 'axios';

const Login = ({navigation}) => {
	const [hidePassword, setHidePassword] = useState(true);
	const [message, setMessage] = useState();
	const [messageType, setMessageType] = useState();

	const handleLogin = (credentials, setSubmitting) => {
		handleMessage(null);
		const url = 'https://aqueous-hamlet-87405.herokuapp.com/user/signin';

		axios
			.post(url, credentials)
			.then((response) => {
				const result = response.data;
				const {message, status, data} = result;

				if (status !== 'SUCCESS') {
					handleMessage(message, status);
				} else {
					navigation.navigate('Welcome', {...data[0]});
				}
				setSubmitting(false);
			}).catch( (error) => {
				console.log(error.json());
				setSubmitting(false);
				handleMessage("Ha ocurrido un error. Verifica tu internet e intenta nuevamente");
			})
	}

	const handleMessage = (message, type = 'FAILED') => {
		setMessage(message);
		setMessageType(type);
	};

	return (
		<KeyboardAvoidingWrapper>
			<StyledContainer>
				<StatusBar style = "dark" />
				<InnerContainer>
					<PageLogo resizeMode = "cover" source = {require('./../assets/img/logo-app.png')} />
					<PageTitle>Tesis</PageTitle>
					<SubTitle>Inicio de Sesión</SubTitle>

					<Formik
						initialValues = {{email: '', password: ''}}
						onSubmit = {(values, {setSubmitting}) => {
							if (values.email == '' || values.password == ''){
								handleMessage('Complete todos los campos');
								setSubmitting(false);
							} else {
								handleLogin(values, setSubmitting);
							}
						}}
					>
						{({handleChange, handleBlur, handleSubmit, values, isSubmitting }) => ( <StyledFormArea>
							<MyTextInput 
								label = "Correo Electrónico"
								icon = "mail"
								placeholder = "emiespinosa0217@gmail.com"
								placeholderTextColor = {darkLight}
								onChangeText = {handleChange('email')}
								onBlur = {handleBlur('email')}
								value = {values.email}
								keyboardType = "email-address"
							/>
							<MyTextInput 
								label = "Contraseña"
								icon = "lock"
								placeholder = "* * * * * * * *"
								placeholderTextColor = {darkLight}
								onChangeText = {handleChange('password')}
								onBlur = {handleBlur('password')}
								value = {values.password}
								secureTextEntry = {hidePassword}
								isPassword = {true}
								hidePassword = {hidePassword}
								setHidePassword = {setHidePassword}
							/>
							<MsgBox type = {messageType}>{message}</MsgBox>
							{!isSubmitting && <StyledButton onPress = {handleSubmit}>
								<ButtonText>Iniciar Sesión</ButtonText>
							</StyledButton>}

							{isSubmitting && <StyledButton disabled = {true}>
								<ActivityIndicator size = "large" color = {primary}/>
							</StyledButton>}

							<Line />
							<StyledButton google = {true} onPress = {handleSubmit}>
								<Fontisto name = "google" color = {primary} size = {20}/>
								<ButtonText google = {true}>Iniciar Sesión con Google</ButtonText>
							</StyledButton>
							<ExtraView>
								<ExtraText>No tienes una cuenta?</ExtraText>
								<TextLink onPress = {() => navigation.navigate("Signup")}>
									<TextLinkContent>Registrarse</TextLinkContent>
								</TextLink>
							</ExtraView>
						</StyledFormArea> 
						)}
					</Formik>
				</InnerContainer>
			</StyledContainer>
		</KeyboardAvoidingWrapper>
	);
};

const MyTextInput = ({label, icon, isPassword, hidePassword, setHidePassword, ...props}) => {
	return (
		<View>
			<LeftIcon>
				<Octicons name = {icon} size = {30} colors = {brand} />
			</LeftIcon>
			<StyledInputLabel>{label}</StyledInputLabel>
			<StyledTextInput {...props} />
			{isPassword && (
				<RightIcon onPress = {() => setHidePassword(!hidePassword)}>
					<Ionicons name = {hidePassword ? 'md-eye-off' : 'md-eye'} size = {30} color = {darkLight} />
				</RightIcon>
			)}
		</View>
	)
}

export default Login;