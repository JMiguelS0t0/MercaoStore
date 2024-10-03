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
  const {category} = route.params;

  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const filtered = products.filter(
      product =>
        product.category.toLowerCase() === category.toLowerCase() ||
        product.title.toLowerCase().includes(category.toLowerCase()),
    );
    setFilteredProducts(filtered);
  }, [category, products]);

  return (
    <View style={globalStyles.container}>
      <Text style={productsListStyles.categoryText}>{category}</Text>
      <View style={productsListStyles.cardsContainer}>
        <Cards products={filteredProducts} />
      </View>
    </View>
  );
};

export default ProductsListScreen;
