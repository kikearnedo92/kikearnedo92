import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';

const products = [
  { id: '1', name: 'Collar para perro', price: '$20', description: 'Collar ajustable y cómodo para tu mascota.', image: require('../assets/images/collar.png') },
  { id: '2', name: 'Comida premium', price: '$15', description: 'Comida nutritiva para perros y gatos.', image: require('../assets/images/comida.png') },
  { id: '3', name: 'Cama para perro', price: '$40', description: 'Cama suave y cómoda para tu mascota.', image: require('../assets/images/cama.png') },
  { id: '4', name: 'Juguete para perro', price: '$10', description: 'Juguete divertido para mantener a tu perro activo.', image: require('../assets/images/juguete.png') },
  // Agrega más productos aquí
];

const ProductScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Catálogo de Productos</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.productItem}
            onPress={() => navigation.navigate('ProductDetailScreen', { 
              productName: item.name, 
              productImage: item.image, 
              productDescription: item.description 
            })}
          >
            <Image source={item.image} style={styles.productImage} />
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>{item.price}</Text>
          </TouchableOpacity>
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
  productItem: {
    padding: 10,
    backgroundColor: '#fff',
    marginVertical: 8,
    borderRadius: 8,
    alignItems: 'center',
  },
  productImage: {
    width: 80,
    height: 80,
    marginBottom: 8,
  },
  productName: {
    fontSize: 18,
  },
  productPrice: {
    fontSize: 16,
    color: 'green',
  },
});

export default ProductScreen;

