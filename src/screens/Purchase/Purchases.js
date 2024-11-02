import React, {useContext, useCallback} from 'react';
import {View, FlatList, ActivityIndicator, Text} from 'react-native';
import purchasesStyles from '../../styles/screens/PurchasesStyles';
import PurchaseItem from './PurchaseItem';
import {PurchasesContext} from '../../context/PurchaseContext';

const Purchases = () => {
  const {purchases, loading, error} = useContext(PurchasesContext);

  const renderItem = useCallback(({item}) => <PurchaseItem item={item} />, []);

  if (loading) {
    return (
      <View style={[purchasesStyles.container, {justifyContent: 'center'}]}>
        <ActivityIndicator size="large" color="#7b5bbd" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={[purchasesStyles.container, {justifyContent: 'center'}]}>
        <Text style={purchasesStyles.errorText}>Error: {error}</Text>
      </View>
    );
  }

  return (
    <View style={purchasesStyles.container}>
      <FlatList
        data={purchases}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={purchasesStyles.listContainer}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <Text style={purchasesStyles.emptyText}>No purchases found</Text>
        }
      />
    </View>
  );
};

export default Purchases;
