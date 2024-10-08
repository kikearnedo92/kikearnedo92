import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function ServiceProviderScreen({ route, navigation }) {
  const { service } = route.params; // Obtener el servicio de los parámetros
  const mockProvider = {
    name: 'Dr. Perruno',
    specialty: `Especialista en ${service}`,
    description: 'Veterinario con 10 años de experiencia en cuidado de mascotas.',
  };

  return (
    <View style={styles.container}>
      <Button title="Volver" onPress={() => navigation.goBack()} />
      <Text style={styles.name}>{mockProvider.name}</Text>
      <Text style={styles.specialty}>{mockProvider.specialty}</Text>
      <Text style={styles.description}>{mockProvider.description}</Text>
      <Button title="Agendar Cita" onPress={() => alert('Cita agendada')} />
      <Button title="Chatear" onPress={() => alert('Abriendo chat...')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  specialty: {
    fontSize: 18,
    marginVertical: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
  },
});
