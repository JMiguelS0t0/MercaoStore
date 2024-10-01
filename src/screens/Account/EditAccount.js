import React, {useContext, useState, useEffect} from 'react';
import {Text, View, ScrollView} from 'react-native';
import globalStyles from '../../styles/globalStyles';
import accountScreenStyles from '../../styles/screens/Account/AccountScreenStyles';
import {Avatar} from '@rneui/themed';
import CustomInput from '../../reusable/CustomInput';
import {Button} from '@rneui/themed';
import {AuthContext} from '../../context/AuthContext';

const EditAccount = () => {
  const {user} = useContext(AuthContext);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    birthday: '',
    address: '',
  });

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || '',
        email: user.email || '',
        birthday: user.birthday || '',
        address: user.address || '',
      });
    }
  }, [user]);

  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleSaveChanges = () => {
    console.log('Datos guardados:', formData);
  };

  return (
    <ScrollView contentContainerStyle={globalStyles.containerScroll}>
      <View style={accountScreenStyles.container}>
        <Text style={accountScreenStyles.title}>Edit Account</Text>
        <Avatar
          size="large"
          rounded
          title={formData.name ? formData.name.charAt(0).toUpperCase() : 'J'}
          containerStyle={globalStyles.avatar}
        />
      </View>

      <View style={accountScreenStyles.formContainer}>
        <CustomInput
          placeholder="Full Name"
          iconName="user"
          value={formData.name}
          onChangeText={value => handleInputChange('name', value)}
          containerStyle={[
            globalStyles.backgroundInput,
            globalStyles.inputStyles,
          ]}
        />

        <CustomInput
          placeholder="Email"
          iconName="envelope"
          keyboardType="email-address"
          value={formData.email}
          onChangeText={value => handleInputChange('email', value)}
          containerStyle={[
            globalStyles.backgroundInput,
            globalStyles.inputStyles,
          ]}
        />

        <CustomInput
          placeholder="Birthday"
          iconName="calendar"
          keyboardType="numeric"
          value={formData.birthday}
          onChangeText={value => handleInputChange('birthday', value)}
          containerStyle={[
            globalStyles.backgroundInput,
            globalStyles.inputStyles,
          ]}
        />

        <CustomInput
          placeholder="Address"
          iconName="crosshairs"
          value={formData.address}
          onChangeText={value => handleInputChange('address', value)}
          containerStyle={[
            globalStyles.backgroundInput,
            globalStyles.inputStyles,
          ]}
        />

        <View style={accountScreenStyles.buttonContainer}>
          <Button
            title="Save Changes"
            buttonStyle={[globalStyles.buttonStyle, globalStyles.borderButton]}
            onPress={handleSaveChanges}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default EditAccount;
