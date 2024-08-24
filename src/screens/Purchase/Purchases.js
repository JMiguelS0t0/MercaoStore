import React from 'react';
import {View, FlatList} from 'react-native';
import purchasesStyles from '../../styles/screens/PurchasesStyles';
import PurchaseItem from './PurchaseItem';

const data = [
  {
    id: 1,
    title: 'iPhone 13 256 GB',
    price: 'US$ 600,00',
    image: require('../../assets/Iphone.webp'),
    progressTitle: 'Arrive in 1 week',
    progress: 0.7,
  },
  {
    id: 2,
    title: 'Case iPhone 1',
    price: 'US$ 25,00',
    image: require('../../assets/CaseIphone.webp'),
    progressTitle: 'Ready to ship',
    progress: 0.3,
  },
  {
    id: 3,
    title: 'Case iPhone 3',
    price: 'US$ 20,00',
    image: require('../../assets/CaseIphone.webp'),
    progressTitle: 'Arrive in 3 days',
    progress: 0.9,
  },
  {
    id: 4,
    title: 'Case iPhone 4',
    price: 'US$ 20,00',
    image: require('../../assets/CaseIphone.webp'),
    progressTitle: 'Arrive in 3 days',
    progress: 0.9,
  },
];

const Purchases = () => {
  return (
    <View style={purchasesStyles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => <PurchaseItem item={item} />}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={purchasesStyles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Purchases;
