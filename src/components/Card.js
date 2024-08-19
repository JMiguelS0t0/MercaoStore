import React from 'react';
import {View, Text, image, Button} from 'react-native';

const PetsCard = pet => {
  return (
    <View>
      <Image>
        <Text>Nombre Mascota: {pet.name}</Text>
        <Text>Dueño: {pet.dueño}</Text>
        <Text>Edad: {pet.edad}</Text>
        <Button title="Agendar cita"></Button>
      </Image>
    </View>
  );
};

export default PetsCard;
