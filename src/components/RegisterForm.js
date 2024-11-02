import React, {useState, useContext, useCallback} from 'react';
import {View, Image, Text, Alert, Pressable} from 'react-native';
import CustomInput from '../reusable/CustomInput';
import {Button, Icon} from '@rneui/themed';
import globalStyles from '../styles/globalStyles';
import {useNavigation} from '@react-navigation/native';
import registerFormStyles from '../styles/screens/Register/registerFormStyles';
import {AuthContext} from '../context/AuthContext';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';

const RegisterForm = () => {
  const navigation = useNavigation();
  const {register} = useContext(AuthContext);

  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    birthday: '',
    country: '',
    department: '',
    city: '',
    address: '',
  });

  const [errors, setErrors] = useState({});
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = useCallback(
    (name, value) => {
      setFormData(prevState => ({
        ...prevState,
        [name]: value,
      }));
      if (errors[name]) {
        setErrors(prev => ({...prev, [name]: null}));
      }
    },
    [errors],
  );

  const validateForm = useCallback(() => {
    const errorMessages = {};
    let valid = true;

    if (!formData.username.trim()) {
      errorMessages.username = 'El nombre de usuario es requerido';
      valid = false;
    } else if (formData.username.trim().length > 10) {
      errorMessages.username =
        'El nombre de usuario no puede tener más de 10 caracteres';
      valid = false;
    }

    const passwordRegex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!formData.password) {
      errorMessages.password = 'La contraseña es requerida';
      valid = false;
    } else if (!passwordRegex.test(formData.password)) {
      errorMessages.password =
        'La contraseña debe tener al menos 8 caracteres, 1 mayúscula, 1 caracter especial y números.';
      valid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errorMessages.email = 'El correo electrónico es requerido';
      valid = false;
    } else if (!emailRegex.test(formData.email.trim())) {
      errorMessages.email = 'El correo electrónico no es válido';
      valid = false;
    }

    if (!formData.birthday) {
      errorMessages.birthday = 'La fecha de nacimiento es requerida';
      valid = false;
    } else {
      const birthDate = moment(formData.birthday, 'DD/MM/YYYY');
      const age = moment().diff(birthDate, 'years');
      if (age < 18 || age > 50) {
        errorMessages.birthday =
          'No está en el rango de edad para crear la cuenta (18-50 años).';
        valid = false;
      }
    }

    if (
      !formData.country?.trim() ||
      !formData.department?.trim() ||
      !formData.city?.trim()
    ) {
      errorMessages.location =
        'Debe escribir un país, departamento y ciudad válidos';
      valid = false;
    }

    if (formData.address?.trim().length > 30) {
      errorMessages.address =
        'La dirección no puede tener más de 30 caracteres';
      valid = false;
    }

    setErrors(errorMessages);
    return valid;
  }, [formData]);

  const handleRegister = useCallback(async () => {
    if (!validateForm()) {
      Alert.alert(
        'Error en el registro',
        'Por favor, revise los campos marcados con errores.',
      );
      return;
    }

    setIsLoading(true);
    try {
      const result = await register({...formData});
      Alert.alert('Registro exitoso', 'Usuario registrado exitosamente');
      navigation.navigate('Login');
    } catch (error) {
      Alert.alert('Error en el registro', error.message);
    } finally {
      setIsLoading(false);
    }
  }, [formData, register, navigation, validateForm]);

  const handleBack = useCallback(() => {
    navigation.navigate('Login');
  }, [navigation]);

  const showDatePicker = useCallback(() => {
    setIsDatePickerVisible(true);
  }, []);

  const handleDateConfirm = useCallback(
    date => {
      setSelectedDate(date);
      handleChange('birthday', moment(date).format('DD/MM/YYYY'));
      setIsDatePickerVisible(false);
    },
    [handleChange],
  );

  return (
    <View style={{flex: 1, backgroundColor: '#583f8c'}}>
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
            disabled={isLoading}
          />
        </View>
        <Image
          source={require('../assets/MercaoStore.png')}
          style={globalStyles.smallLogo}
        />
      </View>

      <View style={globalStyles.containerForm}>
        <Text style={registerFormStyles.registerText}>Register</Text>

        <CustomInput
          placeholder="Username"
          iconName="user"
          containerStyle={globalStyles.backgroundInput}
          value={formData.username}
          onChangeText={value => handleChange('username', value)}
          errorMessage={errors.username}
          disabled={isLoading}
        />
        <CustomInput
          placeholder="Password"
          iconName="key"
          secureTextEntry
          containerStyle={globalStyles.backgroundInput}
          value={formData.password}
          onChangeText={value => handleChange('password', value)}
          errorMessage={errors.password}
          disabled={isLoading}
        />
        <CustomInput
          placeholder="Email"
          iconName="envelope"
          keyboardType="email-address"
          containerStyle={globalStyles.backgroundInput}
          value={formData.email}
          onChangeText={value => handleChange('email', value)}
          errorMessage={errors.email}
          disabled={isLoading}
        />

        <Pressable onPress={showDatePicker} disabled={isLoading}>
          <CustomInput
            placeholder="Birthday"
            iconName="calendar"
            containerStyle={[{width: '100%'}, globalStyles.backgroundInput]}
            value={formData.birthday}
            errorMessage={errors.birthday}
            editable={false}
          />
        </Pressable>

        <DatePicker
          modal
          open={isDatePickerVisible}
          date={selectedDate}
          mode="date"
          theme="dark"
          dividerColor="#7b5bbd"
          buttonColor="#7b5bbd"
          onConfirm={handleDateConfirm}
          onCancel={() => setIsDatePickerVisible(false)}
        />

        <CustomInput
          placeholder="Country"
          iconName="map-marker-alt"
          containerStyle={globalStyles.backgroundInput}
          value={formData.country}
          onChangeText={value => handleChange('country', value)}
          errorMessage={errors.location}
          disabled={isLoading}
        />
        <CustomInput
          placeholder="Department"
          iconName="map-marker-alt"
          containerStyle={globalStyles.backgroundInput}
          value={formData.department}
          onChangeText={value => handleChange('department', value)}
          errorMessage={errors.location}
          disabled={isLoading}
        />
        <CustomInput
          placeholder="City"
          iconName="map-marker-alt"
          containerStyle={globalStyles.backgroundInput}
          value={formData.city}
          onChangeText={value => handleChange('city', value)}
          errorMessage={errors.location}
          disabled={isLoading}
        />
        <CustomInput
          placeholder="Address"
          iconName="crosshairs"
          containerStyle={globalStyles.backgroundInput}
          value={formData.address}
          onChangeText={value => handleChange('address', value)}
          errorMessage={errors.address}
          disabled={isLoading}
        />

        <Button
          title={isLoading ? 'REGISTRANDO...' : 'REGISTER'}
          buttonStyle={[globalStyles.buttonStyle, globalStyles.borderButton]}
          onPress={handleRegister}
          disabled={isLoading}
        />
      </View>
    </View>
  );
};

export default RegisterForm;
