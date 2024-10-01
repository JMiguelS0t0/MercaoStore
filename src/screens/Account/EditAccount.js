import React, {useContext, useState, useEffect} from 'react';
import {Text, View, ScrollView, Pressable} from 'react-native';
import globalStyles from '../../styles/globalStyles';
import accountScreenStyles from '../../styles/screens/Account/AccountScreenStyles';
import {Avatar} from '@rneui/themed';
import CustomInput from '../../reusable/CustomInput';
import {Button} from '@rneui/themed';
import {AuthContext} from '../../context/AuthContext';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';

const EditAccount = () => {
  const {user} = useContext(AuthContext);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    birthday: '',
    address: '',
  });

  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || '',
        email: user.email || '',
        birthday: user.birthday || '',
        address: user.address || '',
      });

      if (user.birthday) {
        setSelectedDate(moment(user.birthday, 'DD/MM/YYYY').toDate());
      }
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

  const showDatePicker = () => {
    setIsDatePickerVisible(true);
  };

  const handleDateConfirm = date => {
    setSelectedDate(date);
    const formattedDate = moment(date).format('DD/MM/YYYY');
    setFormData({...formData, birthday: formattedDate});
    setIsDatePickerVisible(false);
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

        <Pressable onPress={showDatePicker}>
          <CustomInput
            placeholder="Birthday"
            iconName="calendar"
            value={formData.birthday}
            editable={false}
            containerStyle={[{width: '100%'}, globalStyles.backgroundInput]}
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
          textColor="white"
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
