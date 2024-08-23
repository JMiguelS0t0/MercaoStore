import React from 'react';
import {View, Text} from 'react-native';
import {SearchBar, Card, Icon} from '@rneui/themed';
import searchScreenStyles from '../../styles/screens/Search/SearchScreenStyles';
import globalStyles from '../../styles/globalStyles';

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
  const [search, setSearch] = React.useState('');

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
      />
      <Text style={searchScreenStyles.text}>Search by category</Text>
      <View style={searchScreenStyles.categoryContainer}>
        {categories.map(category => (
          <Card
            key={category.id}
            containerStyle={[
              searchScreenStyles.card,
              {backgroundColor: category.color},
            ]}>
            <Text style={searchScreenStyles.cardText}>{category.title}</Text>
          </Card>
        ))}
      </View>
      <Text style={searchScreenStyles.text}>Exclusive Deals Just for You</Text>
      <Card containerStyle={[searchScreenStyles.offerCard]}>
        <Icon
          name="star"
          type="font-awesome-5"
          color="#fff"
          size={25}
          solid={true}
          containerStyle={searchScreenStyles.iconContainer}
        />
        <Text style={searchScreenStyles.cardText}>Offers</Text>
      </Card>
    </View>
  );
};

export default SearchScreen;
