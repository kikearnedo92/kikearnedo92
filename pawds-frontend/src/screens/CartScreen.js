// pawds-frontend/src/screens/CartScreen.js
import React from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';
import { useCart } from '../context/CartContext'; // Asegúrate de que la ruta sea correcta

const CartScreen = ({ navigation }) => {
    const { cartItems } = useCart(); // Usa el hook para obtener cartItems

    const renderCartItem = ({ item }) => (
        <View style={styles.cartItem}>
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>${item.price}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tu Carrito</Text>
            <FlatList
                data={cartItems}
                renderItem={renderCartItem}
                keyExtractor={(item) => item.id ? item.id.toString() : Math.random().toString()} // Usa un ID aleatorio si no hay ID
                contentContainerStyle={styles.listContainer}
            />
            <Button
                title="Proceder al Checkout"
                onPress={() => navigation.navigate('CheckoutScreen')}
            />
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
    listContainer: {
        paddingBottom: 20,
    },
});

export default CartScreen;

