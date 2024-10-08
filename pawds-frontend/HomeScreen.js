import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';

export default function HomeScreen({ userName, navigation }) {
  const services = [
    { name: 'Cuidado de Mascotas', icon: '🐾' },
    { name: 'Alimentación y Nutrición', icon: '🍖' },
    { name: 'Salud y Bienestar', icon: '🏥' },
    { name: 'Adiestramiento', icon: '🦮' },
  ];

  const products = [
    { name: 'Comida Premium', price: '$19.990', image: 'https://via.placeholder.com/150' },
    { name: 'Juguete Interactivo', price: '$9.990', image: 'https://via.placeholder.com/150' },
    { name: 'Cama Ortopédica', price: '$29.990', image: 'https://via.placeholder.com/150' },
  ];

  const handleServiceSelect = (service) => {
    navigation.navigate('ServiceProvider', { service });
  };

  const handleProductSelect = (product) => {
    // Aquí puedes implementar la lógica para manejar la selección de productos
    alert(`Has seleccionado ${product.name}`);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.greeting}>Hola {userName}!</Text>

      <Text style={styles.subheading}>Servicios</Text>
      <View style={styles.servicesGrid}>
        {services.map((service) => (
          <TouchableOpacity
            key={service.name}
            style={styles.serviceItem}
            onPress={() => handleServiceSelect(service.name)}
          >
            <Text style={styles.serviceIcon}>{service.icon}</Text>
            <Text>{service.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.subheading}>Productos</Text>
      <View style={styles.productsGrid}>
        {products.map((product) => (
          <TouchableOpacity
            key={product.name}
            style={styles.productItem}
            onPress={() => handleProductSelect(product)}
          >
            <Image source={{ uri: product.image }} style={styles.productImage} />
            <Text>{product.name}</Text>
            <Text>{product.price}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subheading: {
    fontSize: 20,
    marginVertical: 10,
  },
  servicesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  serviceItem: {
    width: '48%',
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    alignItems: 'center',
  },
  serviceIcon: {
    fontSize: 24,
  },
  productsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  productItem: {
    width: '48%',
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    alignItems: 'center',
  },
  productImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
});

