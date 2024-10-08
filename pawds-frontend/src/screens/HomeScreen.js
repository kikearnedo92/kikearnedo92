// pawds-frontend/src/screens/HomeScreen.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, TextInput } from 'react-native';
import { useCart } from '../context/CartContext'; // Importar el contexto del carrito

const HomeScreen = ({ navigation, route }) => {
  const userName = route.params?.userName || 'Usuario';
  const { addToCart } = useCart(); // Extraer la función para agregar al carrito

  const services = [
    { id: '1', name: 'Peluquería', image: require('../assets/images/peluqueria.png') },
    { id: '2', name: 'Veterinario', image: require('../assets/images/veterinario.png') },
    { id: '3', name: 'Paseo de perro', image: require('../assets/images/paseo.png') },
    { id: '4', name: 'Urgencia', image: require('../assets/images/urgencia.png') },
  ];

  const products = [
    { id: '1', name: 'Collar para perro', image: require('../assets/images/collar.png'), price: '$15', description: 'Collar ajustable y cómodo para tu mascota, disponible en varios colores y tamaños.' },
    { id: '2', name: 'Comida premium', image: require('../assets/images/comida.png'), price: '$30', description: 'Comida nutritiva para perros y gatos, formulada con ingredientes de alta calidad para una dieta balanceada.' },
    { id: '3', name: 'Cama para mascotas', image: require('../assets/images/cama.png'), price: '$50', description: 'Cama suave y acogedora para tu mascota, ideal para un descanso reparador.' },
    { id: '4', name: 'Juguetes para perros', image: require('../assets/images/juguetes.png'), price: '$10', description: 'Juguetes divertidos diseñados para mantener a tu perro activo y entretenido.' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.greeting}>Hola, {userName}!</Text>
      <TextInput style={styles.searchBar} placeholder="Buscar servicios o productos" />

      <Text style={styles.sectionTitle}>Catálogo de Servicios</Text>
      <View style={styles.serviceContainer}>
        {services.map(service => (
          <TouchableOpacity 
            key={service.id} 
            style={styles.serviceBox} 
            onPress={() => navigation.navigate('ProvidersScreen', { serviceName: service.name })}
          >
            <Image source={service.image} style={styles.serviceImage} />
            <Text style={styles.serviceText}>{service.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.sectionTitle}>Catálogo de Productos</Text>
      <View style={styles.productContainer}>
        {products.map(product => (
          <TouchableOpacity 
            key={product.id} 
            style={styles.productBox} 
            onPress={() => {
              navigation.navigate('ProductDetailScreen', { 
                productName: product.name, 
                productImage: product.image, 
                productDescription: product.description, 
                productPrice: product.price 
              });
              addToCart(product); // Agregar producto al carrito
            }}
          >
            <Image source={product.image} style={styles.productImage} />
            <Text style={styles.productText}>{product.name}</Text>
            <Text style={styles.productPrice}>{product.price}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity 
        style={styles.cartButton} 
        onPress={() => navigation.navigate('CartScreen')}
      >
        <Text style={styles.cartButtonText}>Ver Carrito</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  searchBar: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  serviceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  serviceBox: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 10,
    padding: 10,
    alignItems: 'center',
  },
  serviceImage: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
  },
  serviceText: {
    marginTop: 5,
    fontWeight: 'bold',
  },
  productContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  productBox: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 10,
    padding: 10,
    alignItems: 'center',
  },
  productImage: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
  },
  productText: {
    marginTop: 5,
    fontWeight: 'bold',
  },
  productPrice: {
    marginTop: 3,
    color: 'green',
    fontWeight: 'bold',
  },
  cartButton: {
    marginTop: 20,
    padding: 12,
    backgroundColor: '#007bff',
    borderRadius: 5,
  },
  cartButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
  },
});

export default HomeScreen;


