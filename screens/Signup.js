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
	Colors,
	RadioButtonLeft,
	RadioButtonRight
} from './../components/styles';
import {View, TouchableOpacity} from 'react-native';

// colors
const {brand, darkLight, primary} = Colors;

// Datetimepicker
import DateTimePicker from '@react-native-community/datetimepicker';

// keyboard avoiding view
import KeyboardAvoidingWrapper from './../components/KeyboardAvoidingWrapper';

// react native paper
import { RadioButton, Text } from 'react-native-paper';

const Signup = ({navigation}) => {
	const [hidePassword, setHidePassword] = useState(true);
	const [show, setShow] = useState(false);
	const [date, setDate] = useState(new Date(2000, 0, 1));

	// Actual date of birth to be sent
	const [dob, setDob] = useState();

	const onChange = (event, selectedDate) => {
		const currentDate = selectedDate || date;
		setShow(false);
		setDate(currentDate);
		setDob(currentDate);
	}

	const showDatePicker = () => {
		setShow(true);
	}

	const [value, setValue] = React.useState('alumno');

	return (
		<KeyboardAvoidingWrapper>
			<StyledContainer>
				<StatusBar style = "dark" />
				<InnerContainer>
					<PageTitle>Tesis Login</PageTitle>
					<SubTitle>Creación de la Cuenta</SubTitle>

					{show && (
						<DateTimePicker
							testID = "dateTimePicker"
							value = {date}
							mode = 'date'
							is24Hours = {true}
							display = "default"
							onChange = {onChange}
						/>
					)}

					<Formik
						initialValues = {{fullName: '', email: '' , dateOfBirth: '', password: '', confirmPassword: ''}}
						onSubmit = {(values) => {
							console.log(values);
							navigation.navigate("Welcome");
						}}
					>
						{({handleChange, handleBlur, handleSubmit, values}) => ( <StyledFormArea>
							<MyTextInput 
								label = "Nombre y Apellido"
								icon = "person"
								placeholder = "Juan Pérez"
								placeholderTextColor = {darkLight}
								onChangeText = {handleChange('fullName')}
								onBlur = {handleBlur('fullName')}
								value = {values.fullName}
							/>
							<MyTextInput 
								label = "Correo Electrónico"
								icon = "mail"
								placeholder = "emiliano@gmail.com"
								placeholderTextColor = {darkLight}
								onChangeText = {handleChange('email')}
								onBlur = {handleBlur('email')}
								value = {values.email}
								keyboardType = "email-address"
							/>
							<MyTextInput 
								label = "Fecha de Nacimiento"
								icon = "calendar"
								placeholder = "AAAA - MM - DD"
								placeholderTextColor = {darkLight}
								onChangeText = {handleChange('dateOfBirth')}
								onBlur = {handleBlur('dateOfBirth')}
								value = {dob ? dob.toDateString() : ''}
								isDate = {true}
								editable = {false}
								showDatePicker = {showDatePicker}
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
							<MyTextInput 
								label = "Confirmar Contraseña"
								icon = "lock"
								placeholder = "* * * * * * * *"
								placeholderTextColor = {darkLight}
								onChangeText = {handleChange('confirmPassword')}
								onBlur = {handleBlur('confirmPassword')}
								value = {values.confirmPassword}
								secureTextEntry = {hidePassword}
								isPassword = {true}
								hidePassword = {hidePassword}
								setHidePassword = {setHidePassword}
							/>

							<RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
						      	<View style = {{flexDirection: "row"}}>

							      <View style = {{flex: 0.5,flexDirection: "row"}}>
							        <RadioButton value="alumno" />
							        <Text>Alumno</Text>
							       </View>
							        
							      <View style = {{flex: 0.5,flexDirection: "row"}}>
							        <RadioButton value="profesor" />
							        <Text>Profesor</Text>
							      </View>

						      </View>
						    </RadioButton.Group>

							<MsgBox>...</MsgBox>
							<StyledButton onPress = {handleSubmit}>
								<ButtonText>Registrarse</ButtonText>
							</StyledButton>
							<Line />
							<ExtraView>
								<ExtraText>Ya tienes una cuenta?</ExtraText>
								<TextLink onPress = {() => navigation.navigate("Login")}>
									<TextLinkContent>Iniciar Sesión</TextLinkContent>
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

const MyTextInput = ({label, icon, isPassword, hidePassword, setHidePassword, isDate, showDatePicker, ...props}) => {
	return (
		<View>
			<LeftIcon>
				<Octicons name = {icon} size = {30} colors = {brand} />
			</LeftIcon>
			<StyledInputLabel>{label}</StyledInputLabel>
			{!isDate && <StyledTextInput {...props} />}
			{isDate && <TouchableOpacity onPress = {showDatePicker}>
				<StyledTextInput {...props} />
			</TouchableOpacity>}
			{isPassword && (
				<RightIcon onPress = {() => setHidePassword(!hidePassword)}>
					<Ionicons name = {hidePassword ? 'md-eye-off' : 'md-eye'} size = {30} color = {darkLight} />
				</RightIcon>
			)}
		</View>
	)
}

export default Signup;