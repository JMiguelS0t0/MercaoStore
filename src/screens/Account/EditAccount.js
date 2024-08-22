import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import globalStyles from '../../styles/globalStyles';
import accountScreenStyles from '../../styles/screens/Account/AccountScreenStyles';
import {Avatar} from '@rneui/themed';
import CustomInput from '../../reusable/CustomInput';
import {Button} from '@rneui/themed';

const EditAccount = () => {
  return (
    <ScrollView contentContainerStyle={globalStyles.containerScroll}>
      <View style={accountScreenStyles.container}>
        <Text style={accountScreenStyles.title}>Edit Account</Text>
        <Avatar
          size="large"
          rounded
          title="J"
          containerStyle={globalStyles.avatar}
        />
      </View>

      <View style={accountScreenStyles.formContainer}>
        <CustomInput
          placeholder="Full Name"
          iconName="user"
          containerStyle={[
            globalStyles.backgroundInput,
            globalStyles.inputStyles,
          ]}
        />

        <CustomInput
          placeholder="Email"
          iconName="envelope"
          keyboardType="email-address"
          containerStyle={[
            globalStyles.backgroundInput,
            globalStyles.inputStyles,
          ]}
        />
        <CustomInput
          placeholder="Birthday"
          iconName="calendar"
          keyboardType="numeric"
          containerStyle={[
            globalStyles.backgroundInput,
            globalStyles.inputStyles,
          ]}
        />

        <CustomInput
          placeholder="Address"
          iconName="crosshairs"
          containerStyle={[
            globalStyles.backgroundInput,
            globalStyles.inputStyles,
          ]}
        />

        <View style={accountScreenStyles.buttonContainer}>
          <Button
            title="Save Changes"
            buttonStyle={[globalStyles.buttonStyle, globalStyles.borderButton]}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default EditAccount;
