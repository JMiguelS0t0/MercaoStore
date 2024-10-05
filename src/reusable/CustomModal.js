import React from 'react';
import {Modal, View, Text, Pressable} from 'react-native';
import modalStyles from '../styles/modalStyles';

const CustomModal = ({visible, title, message, onClose}) => {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={modalStyles.modalContainer}>
        <View style={modalStyles.modalContent}>
          <Text style={modalStyles.modalTitle}>{title}</Text>
          <Text style={modalStyles.modalMessage}>{message}</Text>
          <Pressable
            style={({pressed}) => [
              modalStyles.modalButton,
              {opacity: pressed ? 0.7 : 1},
            ]}
            onPress={onClose}>
            <Text style={modalStyles.modalButtonText}>OK</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;
