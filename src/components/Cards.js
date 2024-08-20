import React from 'react';
import {Card, Text, Icon} from '@rneui/themed';
import {FlatList, View} from 'react-native';
import CardStyles from '../styles/components/cardStyles';

const data = [
  {
    id: 1,
    title: 'Case iPhone 1',
    price: 'US$ 25,00',
    image: require('../assets/CaseIphone.webp'),
  },
  {
    id: 2,
    title: 'iPhone 13 ',
    price: 'US$ 600,00',
    image: require('../assets/Iphone.webp'),
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
  {
    id: 6,
    title: 'Case iPhone 3',
    price: 'US$ 20,00',
    image: require('../assets/CaseIphone.webp'),
  },
  {
    id: 7,
    title: 'Case iPhone 3',
    price: 'US$ 20,00',
    image: require('../assets/CaseIphone.webp'),
  },
  {
    id: 8,
    title: 'Case iPhone 3',
    price: 'US$ 20,00',
    image: require('../assets/CaseIphone.webp'),
  },
];

const renderItem = ({item}) => (
  <View style={CardStyles.cardWrapper}>
    <Card containerStyle={CardStyles.cardContainer}>
      <View style={CardStyles.imageContainer}>
        <Card.Image
          source={item.image}
          style={CardStyles.cardImage}
          resizeMode="contain"
        />
        <Icon
          name="heart"
          type="font-awesome-5"
          color="#fff"
          size={15}
          containerStyle={CardStyles.heartIcon}
        />
      </View>
      <Card.Title style={CardStyles.cardTitle}>{item.title}</Card.Title>
      <Text style={CardStyles.cardText}>{item.price}</Text>
    </Card>
  </View>
);

const Cards = () => (
  <FlatList
    data={data}
    renderItem={renderItem}
    keyExtractor={item => item.id.toString()}
    numColumns={2}
    contentContainerStyle={CardStyles.listContainer}
    style={CardStyles.cardsContainer}
  />
);

export default Cards;