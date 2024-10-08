// pawds-frontend/src/screens/ProvidersScreen.js
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const ProvidersScreen = ({ route }) => {
  const { serviceName } = route.params;

  const providers = [
    { id: '1', name: 'Proveedor A', price: '$25', rating: 4.5 },
    { id: '2', name: 'Proveedor B', price: '$30', rating: 4.0 },
    { id: '3', name: 'Proveedor C', price: '$20', rating: 4.7 },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Proveedores para {serviceName}</Text>
      <FlatList
        data={providers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.providerBox}>
            <Text style={styles.providerName}>{item.name}</Text>
            <Text style={styles.providerPrice}>Precio: {item.price}</Text>
            <Text style={styles.providerRating}>Calificación: {item.rating} estrellas</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  providerBox: {
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 10,
  },
  providerName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  providerPrice: {
    fontSize: 16,
    marginTop: 5,
  },
  providerRating: {
    fontSize: 16,
    marginTop: 5,
    color: '#888',
  },
});

export default ProvidersScreen;
