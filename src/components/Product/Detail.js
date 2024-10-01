import React, {useContext} from 'react';
import {View, ScrollView, Pressable} from 'react-native';
import {Text, Image, Icon, Divider, Button, Card} from '@rneui/themed';
import detailStyles from '../../styles/components/detailStyles';
import globalStyles from '../../styles/globalStyles';
import {ProductContext} from '../../context/ProductContext';

const Detail = () => {
  const {selectedProduct, addToCart, toggleFavorite, favorites} =
    useContext(ProductContext);

  if (!selectedProduct) {
    return <Text>No product selected</Text>;
  }

  const isFavorite = favorites.some(
    product => product.id === selectedProduct.id,
  );

  const renderPriceSection = () => (
    <View style={detailStyles.priceContainer}>
      <Text style={detailStyles.price}>
        {selectedProduct.onOffer
          ? selectedProduct.offerPrice
          : selectedProduct.price}
      </Text>
      <Pressable onPress={() => toggleFavorite(selectedProduct)}>
        <View style={detailStyles.heartIconBackground}>
          <Icon
            name="heart"
            type="font-awesome-5"
            color={isFavorite ? '#7b5bbd' : '#fff'}
            size={15}
            containerStyle={detailStyles.heartIcon}
          />
        </View>
      </Pressable>
    </View>
  );

  const renderFeaturesSection = () => (
    <View style={detailStyles.section}>
      <Text style={detailStyles.sectionTitle}>Features:</Text>
      <Text style={detailStyles.sectionText}>
        {selectedProduct.title} - Here you can add the specific features of the
        product.
      </Text>
      <Text style={detailStyles.sectionText}>- Feature 1</Text>
      <Text style={detailStyles.sectionText}>- Feature 2</Text>
      <Text style={detailStyles.sectionText}>- Feature 3</Text>
    </View>
  );

  const renderDescriptionSection = () => (
    <View style={detailStyles.section}>
      <Text style={detailStyles.sectionTitle}>Description:</Text>
      <Text style={detailStyles.sectionText}>
        Detailed description of {selectedProduct.title} goes here.
      </Text>
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
          <Icon name="paypal" type="font-awesome" color="#fff" size={24} />
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
    <View style={detailStyles.section}>
      <Text style={detailStyles.sectionTitle}>Comments:</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Card containerStyle={detailStyles.horizontalCardContainer}>
          <Text style={detailStyles.cardTitle}>Comment 1:</Text>
          <Text style={detailStyles.cardText}>Great product, loved it!</Text>
        </Card>
        <Card containerStyle={detailStyles.horizontalCardContainer}>
          <Text style={detailStyles.cardTitle}>Comment 2:</Text>
          <Text style={detailStyles.cardText}>Good value for money.</Text>
        </Card>
        <Card containerStyle={detailStyles.horizontalCardContainer}>
          <Text style={detailStyles.cardTitle}>Comment 3:</Text>
          <Text style={detailStyles.cardText}>
            High quality and fast delivery.
          </Text>
        </Card>
      </ScrollView>
    </View>
  );

  return (
    <ScrollView contentContainerStyle={detailStyles.scrollContainer}>
      <View style={detailStyles.imageContainer}>
        <Image
          source={selectedProduct.image}
          style={detailStyles.image}
          resizeMode="contain"
        />
      </View>
      <Text style={detailStyles.title}>{selectedProduct.title}</Text>

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
        onPress={() => addToCart(selectedProduct)}
      />
      <Divider style={globalStyles.dividerStyle} />

      {renderComments()}
    </ScrollView>
  );
};

export default Detail;
