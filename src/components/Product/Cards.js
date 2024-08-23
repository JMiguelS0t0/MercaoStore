import React from 'react';
import {FlatList} from 'react-native';
import CardItem from './CardItem';
import CardStyles from '../../styles/components/cardStyles';

const data = [
  {
    id: 1,
    title: 'Case iPhone 1',
    price: 'US$ 25,00',
    image: require('../../assets/CaseIphone.webp'),
  },
  {
    id: 2,
    title: 'iPhone 13 ',
    price: 'US$ 600,00',
    image: require('../../assets/Iphone.webp'),
  },
];

const Cards = () => {
  const renderItem = ({item}) => <CardItem item={item} />;

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      numColumns={2}
      contentContainerStyle={CardStyles.listContainer}
      style={CardStyles.cardsContainer}
    />
  );
};

export default Cards;
