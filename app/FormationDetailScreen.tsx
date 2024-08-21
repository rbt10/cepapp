import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { WebView } from 'react-native-webview'; // Importer WebView

const FormationDetailScreen = ({ route }) => {
  const { formation } = route.params || {};

  if (!formation) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Aucun détail de formation disponible</Text>
      </View>
    );
  }

  const formUrls = {
    'Inscription': 'https://cepresurrection.elvanto.eu/form/9ef0e8bc-4a86-4235-8bd3-0473136a4f79',
    'Ouvriers': 'https://cepresurrection.elvanto.eu/form/b20062a3-b4c5-4b1e-8dfb-a4663c33f105',
    'Fondements': 'https://cepresurrection.elvanto.eu/form/f0697c94-65d6-44ba-b259-c5c220559b0b',
    'Baptême': 'https://cepresurrection.elvanto.eu/form/7d504ee9-320d-4be6-a6e7-c26778e7daa7'
  };

  const formUrl = formUrls[formation.title] || '';
  console.log('Form URL:', formUrl); // Pour déboguer

  return (
    <View style={styles.container}>
      <View style={styles.headerBackground}>
        <Text style={styles.headerText}>{formation.title}</Text>
      </View>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.title}>{formation.title}</Text>
        <Text style={styles.description}>{formation.description}</Text>
        {formUrl ? (
          <View style={styles.webViewContainer}>
            <WebView
              source={{ uri: formUrl }}
              style={styles.webView}
            />
          </View>
        ) : (
          <Text style={styles.errorText}>Formulaire non disponible</Text>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  headerBackground: {
    backgroundColor: 'lightblue',
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  contentContainer: {
    flexGrow: 1,
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
  webViewContainer: {
    height: 465, // Assurez-vous que la hauteur correspond à celle du formulaire
    marginTop: 20,
  },
  webView: {
    flex: 1,
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default FormationDetailScreen;
