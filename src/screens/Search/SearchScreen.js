import React, {useState, useEffect, useContext} from 'react';
import {View, Text} from 'react-native';
import {SearchBar, Button} from '@rneui/themed';
import searchScreenStyles from '../../styles/screens/Search/SearchScreenStyles';
import {useNavigation} from '@react-navigation/native';
import {ProductContext} from '../../context/ProductContext';

const categories = [
  {id: 1, title: "Women's Clothing", color: '#ff6347'},
  {id: 2, title: "Men's Clothing", color: '#004d40'},
  {id: 3, title: 'Accessories', color: '#00c853'},
  {id: 4, title: 'Shoes', color: '#ff4081'},
  {id: 5, title: 'Beauty', color: '#7b1fa2'},
  {id: 6, title: 'Home', color: '#827717'},
  {id: 7, title: 'Electronics', color: '#5d4037'},
  {id: 8, title: 'Furniture', color: '#d32f2f'},
  {id: 9, title: 'Toys & Games', color: '#00c853'},
];

const SearchScreen = () => {
  const [search, setSearch] = useState('');
  const navigation = useNavigation();
  const {searchProduct} = useContext(ProductContext);

  const handleCategoryPress = category => {
    navigation.navigate('ProductsList', {category: category.title});
  };

  useEffect(() => {
    return () => {
      setSearch('');
      searchProduct('');
    };
  }, [searchProduct]);

  const handleSearchSubmit = () => {
    searchProduct(search);
    navigation.navigate('ProductsList', {category: search});
  };

  return (
    <View style={searchScreenStyles.container}>
      <SearchBar
        placeholder="Search..."
        onChangeText={setSearch}
        value={search}
        containerStyle={searchScreenStyles.searchContainer}
        inputContainerStyle={searchScreenStyles.inputContainer}
        inputStyle={searchScreenStyles.input}
        lightTheme
        onSubmitEditing={handleSearchSubmit}
      />
      <Text style={searchScreenStyles.text}>Search by category</Text>
      <View style={searchScreenStyles.categoryContainer}>
        {categories.map(category => (
          <Button
            key={category.id}
            title={category.title}
            buttonStyle={[
              searchScreenStyles.button,
              {backgroundColor: category.color},
            ]}
            onPress={() => handleCategoryPress(category)}
          />
        ))}
      </View>
      <Text style={searchScreenStyles.text}>Exclusive Deals Just for You</Text>
      <Button
        title="Offers"
        icon={{
          name: 'star',
          type: 'font-awesome-5',
          color: '#fff',
          size: 25,
        }}
        buttonStyle={searchScreenStyles.offerButton}
      />
    </View>
  );
};

export default SearchScreen;
