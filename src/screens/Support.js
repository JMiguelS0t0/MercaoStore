import React, {useState, useCallback} from 'react';
import {Text, View, ScrollView, TextInput} from 'react-native';
import globalStyles from '../styles/globalStyles';
import {Icon, Button} from '@rneui/themed';
import supportStyles from '../styles/screens/SupportStyles';
import CustomInput from '../reusable/CustomInput';
import {useNavigation} from '@react-navigation/native';
import CustomModal from '../reusable/CustomModal';

const Support = () => {
  const [requestType, setRequestType] = useState('');
  const [description, setDescription] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigation = useNavigation();

  const handleSend = useCallback(() => {
    if (requestType && description) {
      setIsModalVisible(true);
    }
  }, [requestType, description]);

  const handleCloseModal = useCallback(() => {
    setIsModalVisible(false);
    clearForm();
    navigation.goBack();
  }, [navigation]);

  const clearForm = useCallback(() => {
    setRequestType('');
    setDescription('');
  }, []);

  return (
    <ScrollView contentContainerStyle={globalStyles.containerScroll}>
      <View style={supportStyles.container}>
        <Text style={supportStyles.title}>Support Request</Text>
        <CustomInput
          placeholder="Request Type"
          value={requestType}
          onChangeText={setRequestType}
        />
        <TextInput
          style={supportStyles.textArea}
          placeholder="Describe your issue"
          multiline
          numberOfLines={4}
          value={description}
          onChangeText={setDescription}
        />
        <Button
          title="Send"
          onPress={handleSend}
          buttonStyle={globalStyles.buttonStyle}
        />
      </View>

      {isModalVisible && (
        <CustomModal
          visible={isModalVisible}
          title="Request Sent"
          message="Your support request has been successfully sent!"
          onClose={handleCloseModal}
        />
      )}
    </ScrollView>
  );
};

export default Support;
