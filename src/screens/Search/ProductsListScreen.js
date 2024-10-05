import React, {useContext, useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import Cards from '../../components/Product/Cards';
import {ProductContext} from '../../context/ProductContext';
import {useRoute} from '@react-navigation/native';
import globalStyles from '../../styles/globalStyles';
import productsListStyles from '../../styles/screens/Search/ProductsListStyles';

const ProductsListScreen = () => {
  const {products} = useContext(ProductContext);
  const route = useRoute();
  const {category, offersOnly} = route.params;

  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    let filtered;
    if (offersOnly) {
      filtered = products.filter(product => product.onOffer === true);
    } else {
      filtered = products.filter(
        product =>
          product.category.toLowerCase() === category.toLowerCase() ||
          product.title.toLowerCase().includes(category.toLowerCase()),
      );
    }
    setFilteredProducts(filtered);
  }, [category, offersOnly, products]);

  return (
    <View style={globalStyles.container}>
      <Text style={productsListStyles.categoryText}>
        {offersOnly ? 'Exclusive Offers' : category}
      </Text>
      <View style={productsListStyles.cardsContainer}>
        <Cards products={filteredProducts} />
      </View>
    </View>
  );
};

export default ProductsListScreen;
