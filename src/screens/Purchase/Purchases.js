import React, {useContext} from 'react';
import {View, FlatList} from 'react-native';
import purchasesStyles from '../../styles/screens/PurchasesStyles';
import PurchaseItem from './PurchaseItem';
import {PurchasesContext} from '../../context/PurchaseContext';

const Purchases = () => {
  const {purchases} = useContext(PurchasesContext);

  return (
    <View style={purchasesStyles.container}>
      <FlatList
        data={purchases}
        renderItem={({item}) => <PurchaseItem item={item} />}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={purchasesStyles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Purchases;
