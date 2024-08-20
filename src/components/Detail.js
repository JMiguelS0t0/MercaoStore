import React from 'react';
import {View, ScrollView} from 'react-native';
import {Text, Image, Icon, Divider, Card} from '@rneui/themed';
import detailStyles from '../styles/components/detailStyles';

const Detail = () => {
  const renderPriceSection = () => (
    <View style={detailStyles.priceContainer}>
      <Text style={detailStyles.price}>$1000</Text>
      <Icon
        name="heart"
        type="font-awesome-5"
        color="#120b34"
        size={15}
        containerStyle={detailStyles.heartIcon}
      />
    </View>
  );

  const renderFeaturesSection = () => (
    <View style={detailStyles.section}>
      <Text style={detailStyles.sectionTitle}>Features:</Text>
      <Text style={detailStyles.sectionText}>Celular iPhone 13</Text>
    </View>
  );

  const renderDescriptionSection = () => (
    <View style={detailStyles.section}>
      <Text style={detailStyles.sectionTitle}>Description:</Text>
      <Text style={detailStyles.sectionText}>Celular iPhone 13 de 256 GB</Text>
    </View>
  );

  const renderPaymentMethods = () => (
    <View style={detailStyles.section}>
      <Text style={detailStyles.sectionTitle}>Payment Methods:</Text>
      <View style={detailStyles.iconContainer}>
        <View style={detailStyles.iconBackground}>
          <Icon
            name="credit-card"
            type="font-awesome-5"
            color="#120b34"
            size={24}
          />
        </View>
        <View style={detailStyles.iconBackground}>
          <Icon
            name="dollar-sign"
            type="font-awesome-5"
            color="#120b34"
            size={24}
          />
        </View>
        <View style={detailStyles.iconBackground}>
          <Icon
            name="money-bill-alt"
            type="font-awesome-5"
            color="#120b34"
            size={24}
          />
        </View>
      </View>
    </View>
  );

  const renderComments = () => (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <Card containerStyle={detailStyles.horizontalCardContainer}>
        <Card.Title style={detailStyles.cardTitle}>Comments:</Card.Title>
        <Text style={detailStyles.cardText}>Muy buen producto</Text>
      </Card>
      <Card containerStyle={detailStyles.horizontalCardContainer}>
        <Card.Title style={detailStyles.cardTitle}>Comments:</Card.Title>
        <Text style={detailStyles.cardText}>Muy buen producto 2</Text>
      </Card>
    </ScrollView>
  );

  return (
    <ScrollView contentContainerStyle={detailStyles.scrollContainer}>
      <View style={detailStyles.imageContainer}>
        <Image
          source={require('../assets/Iphone.webp')}
          style={detailStyles.image}
          resizeMode="contain"
        />
      </View>
      <Text style={detailStyles.title}>iPhone 12</Text>
      {renderPriceSection()}
      <Divider style={detailStyles.dividerStyle} />
      {renderFeaturesSection()}
      <Divider style={detailStyles.dividerStyle} />
      {renderDescriptionSection()}
      <Divider style={detailStyles.dividerStyle} />
      {renderPaymentMethods()}
      <Divider style={detailStyles.dividerStyle} />
      {renderComments()}
    </ScrollView>
  );
};

export default Detail;
