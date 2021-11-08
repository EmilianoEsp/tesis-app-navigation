import * as React from 'react';
import { Button, View, Text } from 'react-native';

const PantallaDonaciones = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Donaciones</Text>
      <Button
        title="Ir al carrito"
        onPress={() => navigation.push('Carrito')}
      />
      <Button title="Ir al inicio" onPress={() => navigation.navigate('Inicio')} />
      <Button title="Regresar" onPress={() => navigation.goBack()} />
      <Button
        title="Regresar a la primer pantalla del stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

export default PantallaDonaciones;