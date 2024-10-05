import React, {useState, useContext} from 'react';
import {View, Pressable, ScrollView, Alert} from 'react-native';
import {Button} from '@rneui/themed';
import CustomInput from '../../reusable/CustomInput';
import PaymentFormStyles from '../../styles/screens/Payment/PaymentFormStyles';
import globalStyles from '../../styles/globalStyles';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import CustomModal from '../../reusable/CustomModal';
import {useNavigation, useRoute} from '@react-navigation/native';
import {ProductContext} from '../../context/ProductContext';
import {PurchasesContext} from '../../context/PurchaseContext';
import LogoSection from '../Layout/LogoSection';

const PaymentForm = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {clearCart, cart} = useContext(ProductContext);
  const {addPurchase} = useContext(PurchasesContext);
  const [fullName, setFullName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cvv, setCvv] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isModalVisible, setIsModalVisible] = useState(false);

  const {product} = route.params || {};

  const handleCompletePayment = () => {
    if (
      fullName.trim() === '' ||
      cardNumber.trim() === '' ||
      cvv.trim() === '' ||
      expiryDate.trim() === ''
    ) {
      Alert.alert('Incomplete Form', 'Please fill all the fields to proceed.');
    } else {
      setIsModalVisible(true);
    }
  };

  const handleConfirmPayment = () => {
    if (product) {
      addPurchase({
        ...product,
        progressTitle: 'Processing',
        progress: 0.1,
      });
    } else {
      cart.forEach(product => {
        addPurchase({
          ...product,
          progressTitle: 'Processing',
          progress: 0.1,
        });
      });
    }

    clearCart();
    setIsModalVisible(false);

    setTimeout(() => {
      navigation.navigate('Purchases');
    }, 100);
  };

  const handleCancelPayment = () => {
    navigation.goBack();
  };

  const showDatePicker = () => {
    setIsDatePickerVisible(true);
  };

  const handleDateConfirm = date => {
    setSelectedDate(date);
    setExpiryDate(moment(date).format('MM/YY'));
    setIsDatePickerVisible(false);
  };

  return (
    <ScrollView contentContainerStyle={globalStyles.containerScroll}>
      <View style={{marginTop: 30}}>
        <LogoSection />
      </View>
      <View style={PaymentFormStyles.container}>
        <CustomInput
          placeholder="Full Name"
          iconName="user"
          keyboardType="default"
          containerStyle={globalStyles.backgroundInput}
          value={fullName}
          onChangeText={setFullName}
        />

        <CustomInput
          placeholder="Card Number"
          iconName="credit-card"
          keyboardType="numeric"
          containerStyle={globalStyles.backgroundInput}
          value={cardNumber}
          onChangeText={setCardNumber}
        />

        <CustomInput
          placeholder="CVV"
          iconName="key"
          keyboardType="numeric"
          containerStyle={globalStyles.backgroundInput}
          value={cvv}
          onChangeText={setCvv}
          maxLength={3}
        />

        <Pressable onPress={showDatePicker}>
          <CustomInput
            placeholder="Expiry Date (MM/YY)"
            iconName="calendar"
            containerStyle={[{width: '100%'}, globalStyles.backgroundInput]}
            value={expiryDate}
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

        <View style={PaymentFormStyles.buttonContainer}>
          <Button
            title="Complete Payment"
            buttonStyle={globalStyles.buttonStyle}
            onPress={handleCompletePayment}
          />

          <Button
            title="Cancel Payment"
            buttonStyle={[globalStyles.buttonStyle, {marginTop: 10}]}
            onPress={handleCancelPayment}
          />
        </View>

        {isModalVisible && (
          <CustomModal
            visible={isModalVisible}
            title="Payment Completed"
            message="Your order has been created successfully."
            onClose={handleConfirmPayment}
          />
        )}
      </View>
    </ScrollView>
  );
};

export default PaymentForm;
``;
