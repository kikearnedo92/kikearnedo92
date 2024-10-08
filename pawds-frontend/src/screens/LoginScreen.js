import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios';  // Asegúrate de importar Axios

const LoginScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignup, setIsSignup] = useState(false);

  const handleSubmit = async () => {
    try {
      // Aquí haces la solicitud a tu backend para registrar el usuario
      const response = await axios.post('http://192.168.4.20:3000/api/register', {
        nombre: name,
        apellido: surname,
        correo: email,
        contrasena: password,
      });

      if (response.data.success) {
        navigation.navigate('HomeScreen', { userName: name });
      } else {
        Alert.alert('Error', 'Error en el registro');
      }
    } catch (error) {
      console.error('Error:', error);
      Alert.alert('Error', 'Error en la conexión');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{isSignup ? 'Crea una cuenta' : 'Iniciar sesión'}</Text>
      {isSignup && (
        <>
          <TextInput
            style={styles.input}
            placeholder="Nombre"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={styles.input}
            placeholder="Apellido"
            value={surname}
            onChangeText={setSurname}
          />
        </>
      )}
      <TextInput
        style={styles.input}
        placeholder="Correo"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title={isSignup ? 'Registrarse' : 'Iniciar sesión'} onPress={handleSubmit} />
      <Button title={isSignup ? 'Ya tengo cuenta' : 'Crear cuenta'} onPress={() => setIsSignup(!isSignup)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 24,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});

export default LoginScreen;
