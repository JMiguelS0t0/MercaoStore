import React, {useState, useContext, useCallback} from 'react';
import {View, Text, Alert} from 'react-native';
import {Button} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';
import signInFormStyles from '../styles/screens/Login/singInFormStyles';
import globalStyles from '../styles/globalStyles';
import CustomInput from '../reusable/CustomInput';
import {AuthContext} from '../context/AuthContext';

const SignInForm = () => {
  const navigation = useNavigation();
  const {login} = useContext(AuthContext);

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [error, setError] = useState({username: '', password: ''});

  const handleChange = useCallback((name, value) => {
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  }, []);

  const validateInputs = useCallback(() => {
    let valid = true;
    const errorMessages = {username: '', password: ''};

    if (formData.username.length > 10) {
      errorMessages.username = 'El usuario no puede tener más de 10 caracteres';
      valid = false;
    }

    const passwordRegex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(formData.password)) {
      errorMessages.password =
        'La contraseña debe tener al menos 8 caracteres, incluir 1 mayúscula, 1 caracter especial y números.';
      valid = false;
    }

    setError(errorMessages);
    return valid;
  }, [formData]);

  const handleLogin = useCallback(async () => {
    if (validateInputs()) {
      try {
        await login({username: formData.username, password: formData.password});
        navigation.navigate('Home');
      } catch (err) {
        Alert.alert(
          'Error',
          'El usuario no está registrado o la contraseña es incorrecta.',
        );
      }
    }
  }, [formData, login, navigation, validateInputs]);

  const handleCreateAccount = useCallback(() => {
    navigation.navigate('Register');
  }, [navigation]);

  return (
    <View style={[globalStyles.containerForm, signInFormStyles.colorForm]}>
      <Text style={signInFormStyles.loginText}>Sign in</Text>

      <CustomInput
        placeholder="Username"
        iconName="user"
        keyboardType="default"
        textColor="#000"
        iconColor="#beb5c5"
        containerStyle={signInFormStyles.inputContainer}
        value={formData.username}
        onChangeText={value => handleChange('username', value)}
        maxLength={10}
        errorMessage={error.username}
        errorStyle={signInFormStyles.errorStyle}
      />

      <CustomInput
        placeholder="Password"
        iconName="key"
        secureTextEntry
        textColor="#000"
        iconColor="#beb5c5"
        containerStyle={signInFormStyles.inputContainer}
        value={formData.password}
        onChangeText={value => handleChange('password', value)}
        errorMessage={error.password}
        errorStyle={signInFormStyles.errorStyle}
      />

      <Button
        title="LOGIN"
        buttonStyle={globalStyles.buttonStyle}
        onPress={handleLogin}
      />

      <Text style={signInFormStyles.createText}>Don't have an account?</Text>
      <Button
        title="Create a New Account"
        type="clear"
        titleStyle={signInFormStyles.createTextHighlight}
        onPress={handleCreateAccount}
        containerStyle={signInFormStyles.createAccountButton}
      />
    </View>
  );
};

export default SignInForm;
