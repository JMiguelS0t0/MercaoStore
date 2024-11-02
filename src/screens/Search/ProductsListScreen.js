import React, {useContext, useMemo} from 'react';
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

  const filteredProducts = useMemo(() => {
    if (!products || products.length === 0) return [];

    if (offersOnly) {
      return products.filter(product => product.onOffer === true);
    }

    return products.filter(
      product =>
        product.category.toLowerCase() === category.toLowerCase() ||
        product.title.toLowerCase().includes(category.toLowerCase()),
    );
  }, [products, category, offersOnly]);

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
