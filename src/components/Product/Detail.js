import React, {useContext, useState, useEffect, useCallback, memo} from 'react';
import {View, ScrollView, Pressable} from 'react-native';
import {Text, Image, Icon, Divider, Button, Card} from '@rneui/themed';
import detailStyles from '../../styles/components/detailStyles';
import globalStyles from '../../styles/globalStyles';
import {ProductContext} from '../../context/ProductContext';
import {UserContext} from '../../context/UserContext';
import CustomInput from '../../reusable/CustomInput';
import CustomModal from '../../reusable/CustomModal';
import IconRow from '../Payment/IconRow';

const RatingSection = memo(({selectedProduct, addRating}) => {
  const {userRatings, addUserRating} = useContext(UserContext);
  const [rating, setRating] = useState(0);
  const [hasRated, setHasRated] = useState(false);

  useEffect(() => {
    const existingRating = userRatings.find(
      r => r.product === selectedProduct.id,
    );
    if (existingRating) {
      setRating(existingRating.rating);
      setHasRated(true);
    }
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

  return (
    <View style={detailStyles.section}>
      <Text style={detailStyles.sectionTitle}>Rating:</Text>
      <View style={detailStyles.ratingContainer}>
        <Text style={detailStyles.averageRating}>
          Average:{' '}
          {selectedProduct.averageRating?.toFixed(1) || 'No ratings yet'}
        </Text>
        <View style={detailStyles.starsContainer}>
          {[1, 2, 3, 4, 5].map(star => (
            <Pressable
              key={star}
              onPress={() => handleRating(star)}
              disabled={hasRated}>
              <Icon
                name="star"
                type="font-awesome-5"
                solid={star <= (hasRated ? rating : 0)}
                color={star <= (hasRated ? rating : 0) ? '#7353b6' : '#D3D3D3'}
                size={30}
                containerStyle={detailStyles.starIcon}
              />
            </Pressable>
          ))}
        </View>
        {hasRated && (
          <Text style={detailStyles.ratedMessage}>
            Thanks for rating this product!
          </Text>
        )}
      </View>
    </View>
  );
});

const PriceSection = memo(({selectedProduct, isFavorite, toggleFavorite}) => (
  <View style={detailStyles.priceContainer}>
    <Text style={detailStyles.price}>
      $
      {selectedProduct.onOffer
        ? selectedProduct.offerPrice
        : selectedProduct.price}
    </Text>
    <Pressable onPress={() => toggleFavorite(selectedProduct)}>
      <View style={detailStyles.heartIconBackground}>
        <Icon
          name="heart"
          type="font-awesome-5"
          solid={isFavorite}
          color={isFavorite ? '#7b5bbd' : '#fff'}
          size={15}
          containerStyle={detailStyles.heartIcon}
        />
      </View>
    </Pressable>
  </View>
));

const FeaturesSection = memo(({features = []}) => (
  <View style={detailStyles.section}>
    <Text style={detailStyles.sectionTitle}>Features:</Text>
    {features.length > 0 ? (
      features.map((feature, index) => (
        <Text key={index} style={detailStyles.sectionText}>
          • {feature}
        </Text>
      ))
    ) : (
      <Text style={detailStyles.sectionText}>No features available.</Text>
    )}
  </View>
));

const DescriptionSection = memo(({description}) => (
  <View style={detailStyles.section}>
    <Text style={detailStyles.sectionTitle}>Description:</Text>
    <Text style={detailStyles.sectionText}>
      {description || 'No description available.'}
    </Text>
  </View>
));

const CommentsSection = memo(({comments = []}) => (
  <View style={detailStyles.section}>
    <Text style={detailStyles.sectionTitle}>Comments:</Text>
    {comments.length > 0 ? (
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {comments.map((comment, index) => (
          <Card
            key={`comment-${comment.id || index}`}
            containerStyle={detailStyles.horizontalCardContainer}>
            <Text style={detailStyles.cardTitle}>{comment.username}:</Text>
            <Text style={detailStyles.cardText}>{comment.text}</Text>
          </Card>
        ))}
      </ScrollView>
    ) : (
      <Text style={detailStyles.sectionText}>No comments yet.</Text>
    )}
  </View>
));

const Detail = () => {
  const {selectedProduct, addToCart, addComment, addRating} =
    useContext(ProductContext);
  const {favorites, addToFavorites, removeFromFavorites, user, userRatings} =
    useContext(UserContext);
  const [newComment, setNewComment] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isCartModalVisible, setIsCartModalVisible] = useState(false);
  const [localComments, setLocalComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (selectedProduct) {
      setIsLoading(false);
      setLocalComments(selectedProduct.comments || []);
    }
  }, [selectedProduct]);

  const isFavorite = favorites.some(
    product =>
      product.firebaseId === selectedProduct?.firebaseId ||
      product.id === selectedProduct?.id,
  );

  const toggleFavorite = useCallback(async () => {
    try {
      if (isFavorite) {
        await removeFromFavorites(selectedProduct);
      } else {
        await addToFavorites(selectedProduct);
      }
    } catch (error) {
      console.error('Error al gestionar favoritos:', error);
    }
  }, [isFavorite, selectedProduct, addToFavorites, removeFromFavorites]);

  const handleAddComment = useCallback(async () => {
    if (newComment.trim() !== '') {
      try {
        const newCommentObj = {
          id: Date.now(),
          text: newComment,
          username: user.username,
        };
        await addComment(selectedProduct.id, newComment, user.username);
        setLocalComments(prevComments => [
          ...(Array.isArray(prevComments) ? prevComments : []),
          newCommentObj,
        ]);
        setNewComment('');
        setIsModalVisible(true);
      } catch (error) {
        console.error('Error al agregar comentario:', error);
      }
    }
  }, [addComment, newComment, selectedProduct, user.username]);

  const handleAddToCart = useCallback(() => {
    addToCart(selectedProduct);
    setIsCartModalVisible(true);
  }, [addToCart, selectedProduct]);

  if (isLoading) {
    return (
      <View style={detailStyles.loadingContainer}>
        <Text>Loading product details...</Text>
      </View>
    );
  }

  if (!selectedProduct) {
    return (
      <View style={detailStyles.errorContainer}>
        <Text>No product selected</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={detailStyles.scrollContainer}>
      <View style={detailStyles.imageContainer}>
        <Image
          source={{uri: selectedProduct.images}}
          style={detailStyles.image}
          resizeMode="contain"
          onError={error => console.error('Error loading image:', error)}
          PlaceholderContent={
            <View style={detailStyles.imagePlaceholder}>
              <Icon name="image" type="font-awesome-5" size={50} color="#ccc" />
            </View>
          }
        />
      </View>

      <Text style={detailStyles.title}>{selectedProduct.title}</Text>

      <PriceSection
        selectedProduct={selectedProduct}
        isFavorite={isFavorite}
        toggleFavorite={toggleFavorite}
      />
      <Divider style={globalStyles.dividerStyle} />

      <FeaturesSection features={selectedProduct.features} />
      <Divider style={globalStyles.dividerStyle} />

      <DescriptionSection description={selectedProduct.description} />
      <Divider style={globalStyles.dividerStyle} />

      <IconRow selectedProduct={selectedProduct} />
      <Divider style={globalStyles.dividerStyle} />

      <Button
        title="ADD TO CART"
        buttonStyle={[globalStyles.buttonStyle, detailStyles.borderButton]}
        onPress={handleAddToCart}
      />
      <Divider style={globalStyles.dividerStyle} />

      <RatingSection selectedProduct={selectedProduct} addRating={addRating} />
      <Divider style={globalStyles.dividerStyle} />

      <CommentsSection comments={localComments} />

      <CustomInput
        placeholder="Add a comment"
        value={newComment}
        onChangeText={setNewComment}
        onSubmitEditing={handleAddComment}
        containerStyle={detailStyles.inputContainer}
        returnKeyType="done"
      />

      <CustomModal
        visible={isModalVisible}
        title="Comment Added"
        message="Your comment has been successfully added!"
        onClose={() => setIsModalVisible(false)}
      />

      <CustomModal
        visible={isCartModalVisible}
        title="Added to Cart"
        message="The product has been successfully added to your cart!"
        onClose={() => setIsCartModalVisible(false)}
      />
    </ScrollView>
  );
};

export default Detail;
