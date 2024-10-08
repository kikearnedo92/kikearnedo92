import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function WelcomeScreen({ navigation }) {
  const handleStart = () => {
    navigation.navigate('Login'); // Navega a la pantalla de inicio de sesión
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Bienvenido a Pawds!</Text>
      <Button title="Comenzar" onPress={handleStart} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
