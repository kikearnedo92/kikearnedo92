// pawds-frontend/src/screens/CheckoutScreen.js
import React from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import { useCart } from '../context/CartContext';

const CheckoutScreen = () => {
    const { cartItems } = useCart();

    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

    const renderCartItem = ({ item }) => (
        <View style={styles.cartItem}>
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>${item.price}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Resumen de Compra</Text>
            <FlatList
                data={cartItems}
                renderItem={renderCartItem}
                keyExtractor={(item) => item.id.toString()} // Asegúrate de que 'id' esté presente
            />
            <Text style={styles.total}>Total: ${totalPrice}</Text>
            <Button title="Confirmar Compra" onPress={() => {/* Aquí podrías manejar la lógica de confirmación */}} />
        </View>
    );
};

// Estilos
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    cartItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    productName: {
        fontSize: 18,
    },
    productPrice: {
        fontSize: 16,
        color: '#888',
    },
    total: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
    },
});

export default CheckoutScreen;
