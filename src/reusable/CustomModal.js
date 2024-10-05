import React from 'react';
import {Modal, View, Text, TouchableOpacity} from 'react-native';
import modalStyles from '../styles/modalStyles';

const CustomModal = ({visible, title, message, onClose}) => {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={modalStyles.modalContainer}>
        <View style={modalStyles.modalContent}>
          <Text style={modalStyles.modalTitle}>{title}</Text>
          <Text style={modalStyles.modalMessage}>{message}</Text>
          <TouchableOpacity style={modalStyles.modalButton} onPress={onClose}>
            <Text style={modalStyles.modalButtonText}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;
