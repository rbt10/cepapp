import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking,ImageBackground } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const DonationScreen = ({ navigation }) => {
  const handleDonationPress = () => {
    Linking.openURL('https://cep-resurrection.org/faire-un-don/');
  };

  const handlePillarsPress = () => {
    Linking.openURL('https://cep-resurrection.org/piliers/');
  };

  const handleBackPress = () => {
    navigation.goBack(); // Naviguer vers l'écran précédent
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
        <FontAwesome name="arrow-left" size={24} color="white" />
      </TouchableOpacity>

      <ImageBackground
        source={require('../assets/images/dons.png')}
        style={styles.header}
        imageStyle={{ resizeMode: 'cover' }}
      ></ImageBackground>

      <View style={styles.content}>
        <TouchableOpacity style={styles.column} onPress={handleDonationPress}>
          <Image
            source={require('../assets/images/donations.jpg')}
            style={styles.columnImage}
            resizeMode="cover"
          />
          <Text style={styles.columnTitle}>Faire un don</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.column} onPress={handlePillarsPress}>
          <Image
            source={require('../assets/images/local.jpeg')}
            style={styles.columnImage}
            resizeMode="cover"
          />
          <Text style={styles.columnTitle}>Piliers</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff', // Couleur de fond de l'écran
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1,
  },
  header: {
    height: 200,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  content: {
    flexDirection: 'row',
   
  },
  column: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  columnImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  columnTitle: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default DonationScreen;
