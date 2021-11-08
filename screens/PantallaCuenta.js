import * as React from 'react';
import { Button, View, Text } from 'react-native';

const PantallaCuenta = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Cuenta</Text>
      <Button
        title="Ir a los apuntes"
        onPress={() => navigation.push('Apuntes')}
      />
      <Button title="Ir al inicio" onPress={() => navigation.navigate('Inicio')} />
      <Button
        title="Regresar a la primer pantalla del stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

export default PantallaCuenta;