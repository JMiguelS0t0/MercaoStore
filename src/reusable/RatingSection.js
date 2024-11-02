import React, {useState, useEffect, useContext, memo} from 'react';
import {View} from 'react-native';
import {Text} from '@rneui/themed';
import {Rating} from 'react-native-ratings';
import {UserContext} from '../context/UserContext';
import ratingStyles from '../styles/ratingStyles';

const RatingSection = memo(({selectedProduct, addRating}) => {
  const {userRatings, addUserRating} = useContext(UserContext);
  const [rating, setRating] = useState(0);
  const [hasRated, setHasRated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const userRating = userRatings.find(r => r.product === selectedProduct.id);
    if (userRating) {
      setRating(userRating.rating);
      setHasRated(true);
    }
    setIsLoading(false);
  }, [selectedProduct.id, userRatings]);

  const handleRating = async selectedRating => {
    try {
      if (!hasRated) {
        await addRating(selectedProduct.id, selectedRating);

        await addUserRating(selectedProduct.id, selectedRating);

        setRating(selectedRating);
        setHasRated(true);
      }
    } catch (error) {
      console.error('Error saving rating:', error);
    }
  };

  if (isLoading) {
    return <Text>Loading ratings...</Text>;
  }

  return (
    <View style={ratingStyles.container}>
      <Text style={ratingStyles.sectionTitle}>Rating</Text>
      <View style={ratingStyles.ratingContainer}>
        <Text style={ratingStyles.averageRating}>
          Average Rating:{' '}
          {selectedProduct.averageRating?.toFixed(1) || 'No ratings'}
        </Text>
        <Rating
          type="custom"
          ratingColor="#7353b6"
          startingValue={rating}
          readonly={hasRated}
          imageSize={35}
          onFinishRating={handleRating}
          style={ratingStyles.ratingBar}
        />
        {hasRated ? (
          <Text style={ratingStyles.ratedMessage}>Thanks for rating!</Text>
        ) : (
          <Text style={ratingStyles.ratePrompt}>Tap to rate</Text>
        )}
      </View>
    </View>
  );
});

export default RatingSection;
