import React from 'react';
import {Text, View, ScrollView, TextInput} from 'react-native';
import globalStyles from '../styles/globalStyles';
import {Icon} from '@rneui/themed';
import {Button} from '@rneui/themed';
import supportStyles from '../styles/screens/SupportStyles';
import CustomInput from '../reusable/CustomInput';

const Support = () => {
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
        />

        <View style={supportStyles.buttonContainer}>
          <Button
            title="Send"
            buttonStyle={[globalStyles.buttonStyle, globalStyles.borderButton]}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Support;
