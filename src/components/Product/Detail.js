import React from 'react';
import {View, ScrollView} from 'react-native';
import {Text, Image, Icon, Divider, Card, Button} from '@rneui/themed';
import detailStyles from '../../styles/components/detailStyles';
import globalStyles from '../../styles/globalStyles';

const Detail = () => {
  const renderPriceSection = () => (
    <View style={detailStyles.priceContainer}>
      <Text style={detailStyles.price}>$1000</Text>
      <Icon
        name="heart"
        type="font-awesome-5"
        color="#fff"
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
            color="#fff"
            size={24}
          />
        </View>
        <View style={detailStyles.iconBackground}>
          <Icon
            name="dollar-sign"
            type="font-awesome-5"
            color="#fff"
            size={24}
          />
        </View>
        <View style={detailStyles.iconBackground}>
          <Icon
            name="money-bill-alt"
            type="font-awesome-5"
            color="#fff"
            size={24}
          />
        </View>
      </View>
    </View>
  );

  const renderComments = () => (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <Card containerStyle={detailStyles.horizontalCardContainer}>
        <Text style={detailStyles.cardTitle}>Comments:</Text>
        <Text style={detailStyles.cardText}>Muy buen producto</Text>
      </Card>
      <Card containerStyle={detailStyles.horizontalCardContainer}>
        <Text style={detailStyles.cardTitle}>Comments:</Text>
        <Text style={detailStyles.cardText}>Muy buen producto 2</Text>
      </Card>
    </ScrollView>
  );

  return (
    <ScrollView contentContainerStyle={detailStyles.scrollContainer}>
      <View style={detailStyles.imageContainer}>
        <Image
          source={require('../../assets/Iphone.webp')}
          style={detailStyles.image}
          resizeMode="contain"
        />
      </View>
      <Text style={detailStyles.title}>iPhone 12</Text>
      {renderPriceSection()}
      <Divider style={globalStyles.dividerStyle} />
      {renderFeaturesSection()}
      <Divider style={globalStyles.dividerStyle} />
      {renderDescriptionSection()}
      <Divider style={globalStyles.dividerStyle} />
      {renderPaymentMethods()}
      <Divider style={globalStyles.dividerStyle} />
      <Button
        title="ADD TO CART"
        buttonStyle={[globalStyles.buttonStyle, detailStyles.borderButton]}
      />
      <Divider style={globalStyles.dividerStyle} />
      {renderComments()}
    </ScrollView>
  );
};

export default Detail;
