import * as React from 'react';
import { Button, View, Text } from 'react-native';

const PantallaCarrito = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Carrito</Text>
      <Button
        title="Ir a la cuenta"
        onPress={() => navigation.push('Cuenta')}
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

export default PantallaCarrito;