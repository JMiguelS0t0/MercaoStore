import React from 'react';
import {View, FlatList} from 'react-native';
import CartStyles from '../styles/screens/CartStyles';
import CartFooter from '../components/Cart/CartFooter';
import CartItem from '../components/Cart/CartItem';

const data = [
  {
    id: 1,
    title: 'iPhone 13 256 GB',
    price: 'US$ 600,00',
    image: require('../assets/Iphone.webp'),
  },
  {
    id: 2,
    title: 'Case iPhone 1',
    price: 'US$ 25,00',
    image: require('../assets/CaseIphone.webp'),
  },
  {
    id: 3,
    title: 'Case iPhone 3',
    price: 'US$ 20,00',
    image: require('../assets/CaseIphone.webp'),
  },
  {
    id: 4,
    title: 'Case iPhone 3',
    price: 'US$ 20,00',
    image: require('../assets/CaseIphone.webp'),
  },
  {
    id: 5,
    title: 'Case iPhone 3',
    price: 'US$ 20,00',
    image: require('../assets/CaseIphone.webp'),
  },
];

const Cart = () => {
  const renderItem = ({item}) => <CartItem item={item} />;

  return (
    <View style={CartStyles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={CartStyles.listContainer}
        showsVerticalScrollIndicator={false}
      />
      <CartFooter />
    </View>
  );
};

export default Cart;
