import React, {useState} from 'react';
import {Text, View, ScrollView, TextInput} from 'react-native';
import globalStyles from '../styles/globalStyles';
import {Icon} from '@rneui/themed';
import {Button} from '@rneui/themed';
import supportStyles from '../styles/screens/SupportStyles';
import CustomInput from '../reusable/CustomInput';
import {useNavigation} from '@react-navigation/native';
import CustomModal from '../reusable/CustomModal';

const Support = () => {
  const [requestType, setRequestType] = useState('');
  const [description, setDescription] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigation = useNavigation();

  const handleSend = () => {
    if (requestType && description) {
      setIsModalVisible(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    clearForm();
    navigation.goBack();
  };

  const clearForm = () => {
    setRequestType('');
    setDescription('');
  };

  return (
    <ScrollView contentContainerStyle={globalStyles.containerScroll}>
      <View style={supportStyles.container}>
        <Text style={supportStyles.title}>Support</Text>
        <Icon
          name="toolbox"
          type="font-awesome-5"
          color="#120b34"
          size={60}
          style={supportStyles.iconStyle}
        />
      </View>

      <View style={supportStyles.formContainer}>
        <CustomInput
          placeholder="Request Type"
          iconName="list"
          containerStyle={[
            globalStyles.backgroundInput,
            globalStyles.inputStyles,
          ]}
          value={requestType}
          onChangeText={setRequestType}
        />

        <TextInput
          placeholder="Description"
          multiline
          numberOfLines={5}
          placeholderTextColor="#ccc"
          style={[
            globalStyles.backgroundInput,
            globalStyles.inputStyles,
            supportStyles.textArea,
          ]}
          value={description}
          onChangeText={setDescription}
        />

        <View style={supportStyles.buttonContainer}>
          <Button
            title="Send"
            buttonStyle={[globalStyles.buttonStyle, globalStyles.borderButton]}
            onPress={handleSend}
          />
        </View>
      </View>

      <CustomModal
        visible={isModalVisible}
        title="Request Sent"
        message="Your support request has been submitted successfully."
        onClose={handleCloseModal}
      />
    </ScrollView>
  );
};

export default Support;
