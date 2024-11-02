import React from 'react';
import {View, Text, Image} from 'react-native';
import {LinearProgress} from '@rneui/themed';
import purchasesStyles from '../../styles/screens/PurchasesStyles';
import globalStyles from '../../styles/globalStyles';

const PurchaseItem = ({item}) => {
  const getImageSource = imageData => {
    if (typeof imageData === 'string') {
      return {uri: imageData};
    }
    if (Array.isArray(imageData)) {
      return {uri: imageData[0]};
    }
  };

  return (
    <View style={globalStyles.itemContainer}>
      <Image
        source={getImageSource(item.image)}
        style={globalStyles.productImage}
      />
      <View style={globalStyles.productInfoContainer}>
        <View style={globalStyles.productHeader}>
          <Text style={globalStyles.productName}>{item.title}</Text>
          <Text style={globalStyles.productPrice}>{item.price}</Text>
        </View>
        <View style={purchasesStyles.barContainer}>
          <Text style={globalStyles.productText}>{item.progressTitle}</Text>
          <LinearProgress
            value={item.progress}
            variant="determinate"
            color="#7b5bbd"
            style={purchasesStyles.progressBar}
          />
        </View>
      </View>
    </View>
  );
};

export default PurchaseItem;
