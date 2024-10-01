import React, {useState, useContext} from 'react';
import {View, Text, Alert} from 'react-native';
import {Button} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';
import signInFormStyles from '../styles/screens/Login/singInFormStyles';
import globalStyles from '../styles/globalStyles';
import CustomInput from '../reusable/CustomInput';
import {AuthContext} from '../context/AuthContext';

const SignInForm = () => {
  const navigation = useNavigation();
  const {login, user} = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({username: '', password: ''});

  const validateInputs = () => {
    let valid = true;
    const errorMessages = {username: '', password: ''};

    if (username.length > 10) {
      errorMessages.username = 'El usuario no puede tener más de 10 caracteres';
      valid = false;
    }

    const passwordRegex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      errorMessages.password =
        'La contraseña debe tener al menos 8 caracteres, incluir 1 mayúscula, 1 caracter especial y números.';
      valid = false;
    }

    setError(errorMessages);
    return valid;
  };

  const handleLogin = () => {
    if (validateInputs()) {
      if (user && user.name === username && user.password === password) {
        login({username, password});
        navigation.navigate('Home');
      } else {
        Alert.alert(
          'Error',
          'El usuario no está registrado o la contraseña es incorrecta.',
        );
      }
    }
  };

  const handleCreateAccount = () => {
    navigation.navigate('Register');
  };

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
        value={username}
        onChangeText={setUsername}
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
        value={password}
        onChangeText={setPassword}
        errorMessage={error.password}
        errorStyle={signInFormStyles.errorStyle}
      />

      <Button
        title="LOGIN"
        buttonStyle={globalStyles.buttonStyle}
        onPress={handleLogin}
      />

      <Text style={signInFormStyles.createText}>
        Don't have an account?
        <Button
          title="Create a New Account"
          type="clear"
          titleStyle={signInFormStyles.createTextHighlight}
          onPress={handleCreateAccount}
          containerStyle={signInFormStyles.createAccountButton}
        />
      </Text>
    </View>
  );
};

export default SignInForm;
