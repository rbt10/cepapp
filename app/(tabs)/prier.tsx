import { View, Text,StyleSheet,ImageBackground, ScrollView } from 'react-native'
import React from 'react'
import { WebView } from 'react-native-webview';

const prier = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/prie.jpg')} // Assurez-vous que l'image existe dans ce chemin
        style={styles.headerBackground}
        imageStyle={{ resizeMode: 'cover' }}
      >
        <Text style={styles.headerText}>Demande de Prière</Text>
      </ImageBackground>

      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.introText}>
          Vous pouvez soumettre une demande de prière en remplissant le formulaire ci-dessous. Nous serons ravis de prier pour vous.
        </Text>

        <View style={styles.webViewContainer}>
          <WebView
            source={{ uri: 'https://cepresurrection.elvanto.eu/form/97ea7bc7-0af5-44d4-8cb0-1b1b2feadd82' }}
            style={styles.webView}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerBackground: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  contentContainer: {
    flexGrow: 1,
    padding: 20,
  },
  introText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  webViewContainer: {
    flex: 1,
    height: 465,  // Assurez-vous que la hauteur correspond à celle du formulaire
  },
  webView: {
    flex: 1,
  },
});
export default prier