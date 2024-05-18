import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Linking } from 'react-native';

const FormationDetailScreen = ({ route }) => {
  const { formation } = route.params;

  const handleInscription = () => {
    Linking.openURL('https://cep-resurrection.org/contact/')
      .catch(err => console.error('Impossible d\'ouvrir le lien', err));
  };

  if (!formation) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>No formation details available</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerBackground}>
        {/* Contenu en-tête si nécessaire */}
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{formation.title}</Text>
        <Text style={styles.description}>{formation.description}</Text>
        <TouchableOpacity style={styles.button} onPress={handleInscription}>
          <Text style={styles.buttonText}>S'inscrire</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerBackground: {
    backgroundColor: 'lightblue', 
    height: 150, 
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    marginBottom: 30,
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'purple',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default FormationDetailScreen;
