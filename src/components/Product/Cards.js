import React, {useContext} from 'react';
import {FlatList} from 'react-native';
import CardItem from './CardItem';
import CardStyles from '../../styles/components/cardStyles';
import {ProductContext} from '../../context/ProductContext';

const Cards = () => {
  const {products} = useContext(ProductContext);

  const renderItem = ({item}) => <CardItem item={item} />;

  return (
    <FlatList
      data={products}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      numColumns={2}
      contentContainerStyle={CardStyles.listContainer}
      style={CardStyles.cardsContainer}
    />
  );
};

export default Cards;
