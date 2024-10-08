// src/screens/ProviderDetailScreen.js
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const ProviderDetailScreen = ({ route }) => {
  const { providerName, price, rating } = route.params; // Recibe los parámetros desde ServiceProviderScreen

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{providerName}</Text>
      <Text style={styles.price}>{price}</Text>
      <Text style={styles.rating}>{rating} ★</Text>
      <Button title="Agendar Cita" onPress={() => {/* Lógica para agendar cita */}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  price: {
    fontSize: 20,
    color: 'green',
    marginBottom: 10,
  },
  rating: {
    fontSize: 18,
    color: 'gray',
  },
});

export default ProviderDetailScreen;

