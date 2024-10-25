import React, {useContext, useState, useEffect, useCallback, memo} from 'react';
import {View, ScrollView, Pressable} from 'react-native';
import {Text, Image, Icon, Divider, Button, Card} from '@rneui/themed';
import detailStyles from '../../styles/components/detailStyles';
import globalStyles from '../../styles/globalStyles';
import {ProductContext} from '../../context/ProductContext';
import CustomInput from '../../reusable/CustomInput';
import CustomModal from '../../reusable/CustomModal';
import IconRow from '../Payment/IconRow';

const PriceSection = memo(({selectedProduct, isFavorite, toggleFavorite}) => (
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
));

const FeaturesSection = memo(({features}) => (
  <View style={detailStyles.section}>
    <Text style={detailStyles.sectionTitle}>Features:</Text>
    {features && features.length > 0 ? (
      features.map((feature, index) => (
        <Text key={index} style={detailStyles.sectionText}>
          - {feature}
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
    <Text style={detailStyles.sectionText}>{description}</Text>
  </View>
));

const CommentsSection = memo(({comments}) => (
  <View style={detailStyles.section}>
    <Text style={detailStyles.sectionTitle}>Comments:</Text>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {comments.map(comment => (
        <Card
          key={comment.id}
          containerStyle={detailStyles.horizontalCardContainer}>
          <Text style={detailStyles.cardTitle}>Comment {comment.id}:</Text>
          <Text style={detailStyles.cardText}>{comment.text}</Text>
        </Card>
      ))}
    </ScrollView>
  </View>
));

const Detail = () => {
  const {selectedProduct, addToCart, toggleFavorite, favorites, addComment} =
    useContext(ProductContext);
  const [newComment, setNewComment] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [localComments, setLocalComments] = useState([]);

  useEffect(() => {
    if (selectedProduct && selectedProduct.comments) {
      setLocalComments(selectedProduct.comments);
    }
  }, [selectedProduct]);

  const isFavorite = favorites.some(
    product => product.id === selectedProduct.id,
  );

  const handleAddComment = useCallback(() => {
    if (newComment.trim() !== '') {
      addComment(selectedProduct.id, newComment);
      setLocalComments(prevComments => [
        ...prevComments,
        {id: prevComments.length + 1, text: newComment},
      ]);
      setNewComment('');
      setIsModalVisible(true);
    }
  }, [addComment, newComment, selectedProduct, localComments]);

  if (!selectedProduct) {
    return <Text>No product selected</Text>;
  }

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
        onPress={() => addToCart(selectedProduct)}
      />
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

      {isModalVisible && (
        <CustomModal
          visible={isModalVisible}
          title="Comment Added"
          message="Your comment has been successfully added!"
          onClose={() => setIsModalVisible(false)}
        />
      )}
    </ScrollView>
  );
};

export default Detail;
