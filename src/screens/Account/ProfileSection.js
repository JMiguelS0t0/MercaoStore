import React, {useContext, useState} from 'react';
import {View, Text, Alert, TouchableOpacity} from 'react-native';
import {Avatar} from '@rneui/themed';
import {launchImageLibrary} from 'react-native-image-picker';
import accountScreenStyles from '../../styles/screens/Account/AccountScreenStyles';
import globalStyles from '../../styles/globalStyles';
import {UserContext} from '../../context/UserContext';
import app from 'firebase/compat/app';

const ProfileSection = () => {
  const {userProfile, updateUserProfile} = useContext(UserContext);
  const [isUploading, setIsUploading] = useState(false);

  const getValidImageSource = image => {
    return image && image !== 'null' && image !== '' ? {uri: image} : undefined;
  };

  const handleAvatarClick = () => {
    Alert.alert(
      'Actualizar Imagen de Perfil',
      '¿Deseas actualizar tu imagen de perfil?',
      [
        {text: 'Cancelar', style: 'cancel'},
        {text: 'Seleccionar Imagen', onPress: selectImage},
      ],
    );
  };

  const selectImage = () => {
    launchImageLibrary({mediaType: 'photo'}, response => {
      if (response.didCancel) {
      } else if (response.errorMessage) {
        console.error('Error al seleccionar imagen:', response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        const {uri} = response.assets[0];
        uploadImage(uri);
      }
    });
  };

  const uploadImage = async uri => {
    try {
      setIsUploading(true);

      const response = await fetch(uri);
      const blob = await response.blob();

      const storage = app.storage();

      const filename = `UserProfile/${
        userProfile?.email || 'user'
      }-${Date.now()}.jpg`;
      const storageRef = storage.ref().child(filename);

      const uploadTask = await storageRef.put(blob);

      const downloadURL = await storageRef.getDownloadURL();

      await updateUserProfile({image: downloadURL});

      setIsUploading(false);
      Alert.alert('Éxito', 'Imagen de perfil actualizada correctamente');
    } catch (error) {
      console.error('Error detallado al subir la imagen:', error);
      setIsUploading(false);
      Alert.alert(
        'Error',
        'No se pudo actualizar la imagen de perfil. Por favor, intenta de nuevo.',
      );
    }
  };

  return (
    <View style={accountScreenStyles.pfpStyle}>
      <TouchableOpacity onPress={handleAvatarClick}>
        <Avatar
          size="large"
          rounded
          source={getValidImageSource(userProfile?.image)}
          title={
            !userProfile?.image ||
            userProfile.image === 'null' ||
            userProfile.image === ''
              ? userProfile?.username?.charAt(0).toUpperCase() || 'U'
              : ''
          }
          containerStyle={globalStyles.avatar}
        />
      </TouchableOpacity>
      <Text style={accountScreenStyles.text}>
        {userProfile?.username || 'Guest'}
      </Text>
      <Text style={accountScreenStyles.subtitles}>
        {userProfile?.email || 'No email'}
      </Text>
      {isUploading && (
        <Text style={accountScreenStyles.upload}>Subiendo imagen...</Text>
      )}
    </View>
  );
};

export default ProfileSection;
