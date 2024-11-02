import React, {useState, useContext, useCallback} from 'react';
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
import {UserContext} from '../../context/UserContext';
import LogoSection from '../Layout/LogoSection';

const PaymentForm = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {clearCart, cart, products} = useContext(ProductContext);
  const {addPurchase} = useContext(UserContext);

  const [formData, setFormData] = useState({
    fullName: '',
    cardNumber: '',
    cvv: '',
    expiryDate: '',
  });
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isModalVisible, setIsModalVisible] = useState(false);

  const {product} = route.params || {};

  const handleInputChange = useCallback((name, value) => {
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  }, []);

  const formatPurchaseData = (item, quantity = 1) => {
    const estimatedDays = Math.floor(Math.random() * 14) + 1;
    const progress = Math.random() * 0.8 + 0.1;

    const unitPrice = item.onOffer ? item.offerPrice : item.price;
    const totalPrice = unitPrice * quantity + 15;

    return {
      id: item.id,
      title: item.title,
      price: `US$ ${totalPrice.toFixed(2)}`,
      image: item.images,
      progressTitle: `Arrive in ${estimatedDays} ${
        estimatedDays === 1 ? 'day' : 'days'
      }`,
      progress: progress,
      purchaseDate: moment().format('DD/MM/YYYY'),
      quantity: quantity,
    };
  };

  const handleCompletePayment = useCallback(() => {
    const {fullName, cardNumber, cvv, expiryDate} = formData;
    if (!fullName || !cardNumber || !cvv || !expiryDate) {
      Alert.alert('Incomplete Form', 'Please fill all the fields to proceed.');
    } else {
      setIsModalVisible(true);
    }
  }, [formData]);

  const handleConfirmPayment = useCallback(async () => {
    try {
      if (product) {
        const purchaseData = formatPurchaseData(product);
        await addPurchase(purchaseData);
      } else {
        const cartPurchases = await Promise.all(
          Object.entries(cart).map(async ([productId, cartItem]) => {
            const productDetails = products.find(p => p.id === productId);
            if (productDetails) {
              return formatPurchaseData(productDetails, cartItem.quantity);
            }
          }),
        );

        const validPurchases = cartPurchases.filter(Boolean);
        await Promise.all(
          validPurchases.map(purchase => addPurchase(purchase)),
        );
      }

      if (clearCart) {
        await clearCart();
      }

      setIsModalVisible(false);
      setTimeout(() => {
        navigation.navigate('Home');
      }, 100);
    } catch (error) {
      console.error('Error processing payment:', error);
      Alert.alert(
        'Error',
        'There was an error processing your payment. Please try again.',
      );
    }
  }, [addPurchase, cart, clearCart, navigation, product, products]);

  const handleCancelPayment = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const showDatePicker = useCallback(() => {
    setIsDatePickerVisible(true);
  }, []);

  const handleDateConfirm = useCallback(
    date => {
      setSelectedDate(date);
      handleInputChange('expiryDate', moment(date).format('MM/YY'));
      setIsDatePickerVisible(false);
    },
    [handleInputChange],
  );

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
          value={formData.fullName}
          onChangeText={value => handleInputChange('fullName', value)}
        />

        <CustomInput
          placeholder="Card Number"
          iconName="credit-card"
          keyboardType="numeric"
          containerStyle={globalStyles.backgroundInput}
          value={formData.cardNumber}
          onChangeText={value => handleInputChange('cardNumber', value)}
        />

        <CustomInput
          placeholder="CVV"
          iconName="key"
          keyboardType="numeric"
          containerStyle={globalStyles.backgroundInput}
          value={formData.cvv}
          onChangeText={value => handleInputChange('cvv', value)}
          maxLength={3}
        />

        <Pressable onPress={showDatePicker}>
          <CustomInput
            placeholder="Expiry Date (MM/YY)"
            iconName="calendar"
            containerStyle={[{width: '100%'}, globalStyles.backgroundInput]}
            value={formData.expiryDate}
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
