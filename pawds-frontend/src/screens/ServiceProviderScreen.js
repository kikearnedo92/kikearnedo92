import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const providers = [
  { id: '1', name: 'Proveedor 1', price: '$30', rating: '4.5' },
  { id: '2', name: 'Proveedor 2', price: '$25', rating: '4.7' },
  // Agrega más proveedores aquí
];

const ServiceProviderScreen = ({ route }) => {
  const { serviceName } = route.params; // Nombre del servicio pasado desde HomeScreen

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Proveedores para {serviceName}</Text>
      <FlatList
        data={providers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.providerItem}>
            <Text style={styles.providerName}>{item.name}</Text>
            <Text style={styles.providerPrice}>{item.price}</Text>
            <Text style={styles.providerRating}>{item.rating} ★</Text>
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
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  providerItem: {
    padding: 10,
    backgroundColor: '#fff',
    marginVertical: 8,
    borderRadius: 8,
  },
  providerName: {
    fontSize: 18,
  },
  providerPrice: {
    fontSize: 16,
    color: 'green',
  },
  providerRating: {
    fontSize: 14,
    color: 'gray',
  },
});

export default ServiceProviderScreen;
