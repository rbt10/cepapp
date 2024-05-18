import { View, Text,StyleSheet,ImageBackground, ScrollView } from 'react-native'
import React from 'react'
import churches from '@/api/Church'

const eglises = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/world.png')}
        style={styles.headerBackground}
        imageStyle={{ resizeMode: 'cover' }}
      >
        <Text style={styles.headerText}>Nos Églises</Text>
      </ImageBackground>

      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.welcomeText}>
          Bienvenue dans nos églises. Découvrez nos différents lieux de culte et venez nous rejoindre !
        </Text>

        {/* Informations sur les églises */}
        <View style={styles.textBlock}>
          <Text style={styles.sectionTitle}>Siège Social :</Text>
          <Text>8 rue de l’Orme, 91540 Fontenay-le-Vicomte</Text>
          <Text style={styles.sectionTitle}>Lieu de Culte Actuel :</Text>
          <Text>Villeneuve-le-Roi, France</Text>
          <Text style={styles.sectionTitle}>Responsable :</Text>
          <Text>Pasteur Douglas KIONGEKA</Text>
          <Text>Adresse : 22 rue Honoré Oursel, 94290 Villeneuve-le-Roi</Text>
          <Text>Téléphone : +33 (0)6 08 05 82 07</Text>
          <Text>Email : contact@cep-resurrection.org</Text>
        </View>

        {/* Autres églises avec informations similaires */}
        {churches.map((church, index) => (
          <View key={index} style={styles.textBlock}>
            <Text style={styles.sectionTitle}>{church.location}</Text>
            <Text style={styles.sectionTitle}>Responsable :</Text>
            <Text>{church.responsible}</Text>
            <Text>Adresse : {church.address}</Text>
            <Text>Téléphone : {church.phone}</Text>
            <Text>Email : {church.email}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  )
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
  welcomeText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  textBlock: {
    padding: 15,
    marginBottom: 20,
    backgroundColor: '#f9eae1',
    borderRadius: 10,
    elevation: 3,
  },
  sectionTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default eglises