import React, {useContext, useState, useEffect, useCallback} from 'react';
import {Text, View, ScrollView, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import globalStyles from '../../styles/globalStyles';
import accountScreenStyles from '../../styles/screens/Account/AccountScreenStyles';
import {Avatar} from '@rneui/themed';
import CustomInput from '../../reusable/CustomInput';
import {Button} from '@rneui/themed';
import {AuthContext} from '../../context/AuthContext';
import {UserContext} from '../../context/UserContext';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import CustomModal from '../../reusable/CustomModal';

const EditAccount = () => {
  const {user} = useContext(AuthContext);
  const {userProfile, updateUserProfile} = useContext(UserContext);
  const navigation = useNavigation();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    birthday: '',
    address: '',
  });
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    if (user) {
      setFormData({
        username: userProfile.username || user.username || '',
        email: userProfile.email || user.email || '',
        birthday: userProfile.birthday || user.birthday || '',
        address: userProfile.address || user.address || '',
      });

      if (userProfile.birthday || user.birthday) {
        setSelectedDate(
          moment(userProfile.birthday || user.birthday, 'DD/MM/YYYY').toDate(),
        );
      }
    }
  }, [user, userProfile]);

  const getValidImageSource = image => {
    return image && image !== 'null' && image !== '' ? {uri: image} : undefined;
  };

  const handleInputChange = useCallback((field, value) => {
    setFormData(prevData => ({
      ...prevData,
      [field]: value,
    }));
  }, []);

  const handleSaveChanges = useCallback(async () => {
    try {
      await updateUserProfile({
        ...formData,
        image: userProfile?.image || null,
      });
      setIsModalVisible(true);
    } catch (error) {
      console.error('Error saving profile changes:', error);
    }
  }, [formData, updateUserProfile, userProfile?.image]);

  const handleCloseModal = useCallback(() => {
    setIsModalVisible(false);
    navigation.goBack();
  }, [navigation]);

  const showDatePicker = useCallback(() => {
    setIsDatePickerVisible(true);
  }, []);

  const handleDateConfirm = useCallback(date => {
    setSelectedDate(date);
    const formattedDate = moment(date).format('DD/MM/YYYY');
    setFormData(prevData => ({
      ...prevData,
      birthday: formattedDate,
    }));
    setIsDatePickerVisible(false);
  }, []);

  return (
    <ScrollView contentContainerStyle={globalStyles.containerScroll}>
      <View style={accountScreenStyles.container}>
        <Text style={accountScreenStyles.title}>Edit Account</Text>
        <Avatar
          size="large"
          rounded
          source={getValidImageSource(userProfile?.image)}
          title={
            !userProfile?.image ||
            userProfile.image === 'null' ||
            userProfile.image === ''
              ? formData.username?.charAt(0).toUpperCase() || 'U'
              : ''
          }
          containerStyle={globalStyles.avatar}
        />
      </View>

      <View style={accountScreenStyles.formContainer}>
        <CustomInput
          placeholder="Username"
          iconName="user"
          value={formData.username}
          onChangeText={value => handleInputChange('username', value)}
          maxLength={10}
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

      <CustomModal
        visible={isModalVisible}
        title="Profile Updated"
        message="Your changes have been saved successfully."
        onClose={handleCloseModal}
      />
    </ScrollView>
  );
};

export default EditAccount;
