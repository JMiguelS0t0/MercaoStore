import React, {useState, useContext} from 'react';
import {View, Image, Text, Alert} from 'react-native';
import CustomInput from '../reusable/CustomInput';
import {Button, Icon} from '@rneui/themed';
import globalStyles from '../styles/globalStyles';
import {useNavigation} from '@react-navigation/native';
import registerFormStyles from '../styles/screens/Register/registerFormStyles';
import {AuthContext} from '../context/AuthContext'; // Importamos el AuthContext

const RegisterForm = () => {
  const navigation = useNavigation();
  const {register} = useContext(AuthContext); // Usamos el contexto de autenticación
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');
  const [country, setCountry] = useState('');
  const [department, setDepartment] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [errors, setErrors] = useState({});

  const handleRegister = () => {
    const errorMessages = {};
    let valid = true;

    if (username.length > 10) {
      errorMessages.username =
        'El nombre de usuario no puede tener más de 10 caracteres';
      valid = false;
    }

    const passwordRegex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      errorMessages.password =
        'La contraseña debe tener al menos 8 caracteres, 1 mayúscula, 1 caracter especial y números.';
      valid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errorMessages.email = 'El correo electrónico no es válido';
      valid = false;
    }

    const birthDate = new Date(birthday);
    const currentDate = new Date();
    const minAge = 18;
    const maxAge = 50;
    const age = currentDate.getFullYear() - birthDate.getFullYear();
    if (age < minAge || age > maxAge) {
      errorMessages.birthday =
        'No está en el rango de edad para crear la cuenta (18-50 años).';
      valid = false;
    }

    if (address.length > 30) {
      errorMessages.address =
        'La dirección no puede tener más de 30 caracteres';
      valid = false;
    }

    if (country !== 'Colombia' || department === '' || city === '') {
      errorMessages.location =
        'Debe seleccionar un país, departamento y ciudad válidos';
      valid = false;
    }

    setErrors(errorMessages);

    if (valid) {
      register({name: username, email, password});
      Alert.alert('Registro exitoso', 'Usuario registrado exitosamente');
      navigation.navigate('Home');
    } else {
      Alert.alert(
        'Error en el registro',
        'Por favor, revise los campos marcados con errores.',
      );
    }
  };

  const handleBack = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={{flex: 1}}>
      <View style={registerFormStyles.header}>
        <View style={registerFormStyles.headerLeft}>
          <Button
            icon={
              <Icon
                name="arrow-left"
                type="font-awesome-5"
                color="#fff"
                size={20}
              />
            }
            title="Back"
            onPress={handleBack}
            buttonStyle={registerFormStyles.backButton}
            titleStyle={registerFormStyles.backButtonText}
            style={registerFormStyles.backButton}
          />
        </View>
        <Image
          source={require('../assets/Mercao.png')}
          style={globalStyles.smallLogo}
        />
      </View>

      <View style={globalStyles.containerForm}>
        <Text style={registerFormStyles.registerText}>Register</Text>
        <CustomInput
          placeholder="Username"
          iconName="user"
          containerStyle={globalStyles.backgroundInput}
          value={username}
          onChangeText={setUsername}
          errorMessage={errors.username}
        />
        <CustomInput
          placeholder="Password"
          iconName="key"
          secureTextEntry
          containerStyle={globalStyles.backgroundInput}
          value={password}
          onChangeText={setPassword}
          errorMessage={errors.password}
        />
        <CustomInput
          placeholder="Email"
          iconName="envelope"
          keyboardType="email-address"
          containerStyle={globalStyles.backgroundInput}
          value={email}
          onChangeText={setEmail}
          errorMessage={errors.email}
        />
        <CustomInput
          placeholder="Birthday"
          iconName="calendar"
          keyboardType="numeric"
          containerStyle={globalStyles.backgroundInput}
          value={birthday}
          onChangeText={setBirthday}
          errorMessage={errors.birthday}
        />
        <CustomInput
          placeholder="Country"
          iconName="map-marker-alt"
          containerStyle={globalStyles.backgroundInput}
          value={country}
          onChangeText={setCountry}
          errorMessage={errors.location}
        />
        <CustomInput
          placeholder="Department"
          iconName="map-marker-alt"
          containerStyle={globalStyles.backgroundInput}
          value={department}
          onChangeText={setDepartment}
          errorMessage={errors.location}
        />
        <CustomInput
          placeholder="City"
          iconName="map-marker-alt"
          containerStyle={globalStyles.backgroundInput}
          value={city}
          onChangeText={setCity}
          errorMessage={errors.location}
        />
        <CustomInput
          placeholder="Address"
          iconName="crosshairs"
          containerStyle={globalStyles.backgroundInput}
          value={address}
          onChangeText={setAddress}
          errorMessage={errors.address}
        />

        <Button
          title="REGISTER"
          buttonStyle={[globalStyles.buttonStyle, globalStyles.borderButton]}
          onPress={handleRegister}
        />
      </View>
    </View>
  );
};

export default RegisterForm;
