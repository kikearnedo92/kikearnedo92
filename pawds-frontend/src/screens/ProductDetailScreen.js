// pawds-frontend/src/screens/ProductDetailScreen.js
import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import { useCart } from '../context/CartContext'; // Importar el contexto del carrito

const ProductDetailScreen = ({ route }) => {
  const { productName, productImage, productPrice } = route.params;

  // Descripciones de los productos
  const descriptions = {
    'Collar para perro': 'Collar ajustable y cómodo para tu mascota, disponible en varios colores y tamaños.',
    'Comida premium': 'Comida nutritiva para perros y gatos, formulada con ingredientes de alta calidad para una dieta balanceada.',
    'Cama para mascotas': 'Cama suave y acogedora para tu mascota, ideal para un descanso reparador.',
    'Juguetes para perros': 'Juguetes divertidos diseñados para mantener a tu perro activo y entretenido.',
  };

  // Obtener la descripción correspondiente
  const productDescription = descriptions[productName] || 'Descripción no disponible';

  // Acceder a la función de agregar al carrito
  const { addToCart } = useCart();

  // Manejar el evento de agregar al carrito
  const handleAddToCart = () => {
    addToCart({ name: productName, image: productImage, price: productPrice });
  };

  return (
    <View style={styles.container}>
      <Image source={productImage} style={styles.image} />
      <Text style={styles.title}>{productName}</Text>
      <Text style={styles.price}>{productPrice}</Text>
      <Text style={styles.description}>{productDescription}</Text>
      <Button title="Agregar al carrito" onPress={handleAddToCart} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 20,
    color: 'green',
    marginVertical: 8,
  },
  description: {
    fontSize: 16,
    color: 'gray',
    marginTop: 8,
  },
});

export default ProductDetailScreen;


