import React, { useEffect } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Linking, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Swiper from 'react-native-swiper';
import { scheduleNotifications } from '../services/Notification';

export default function Home() {
  const navigation = useNavigation();

  useEffect(() => {
    scheduleNotifications();
  }, []);

  const handleFormationPress = () => {
    navigation.navigate('formations');
  };

  const handleDptPress = () => {
    navigation.navigate('ChurchDepartmentsTable');
  };
  const handleCellulePress = () => {
    navigation.navigate('CelluleScreen');
  };

  const handleVisionPress = () => {
    navigation.navigate('VisionScreen');
  };

  const handleDonPress = () => {
    navigation.navigate('DonationScreen');
  };

  const handleShopPress = () => {
    const shopUrl = 'https://cep-resurrection.org/boutique/';
    Linking.openURL(shopUrl);
  };

  return (
    <View style={homeStyle.container}>
      <Image source={require('../../assets/images/logo.png')} style={homeStyle.logo} />
      <ScrollView>
        <View>
          <Swiper style={homeStyle.sliderContainer} autoplay={true} autoplayTimeout={3}>
            <View>
              <Image source={require('../../assets/images/tannee.jpeg')} style={homeStyle.homeImg} />
            </View>
            <View>
              <Image source={require('../../assets/images/cepmag.jpeg')} style={homeStyle.homeImg} />
            </View>
            <View>
              <Image source={require('../../assets/images/mags.jpeg')} style={homeStyle.homeImg} />
            </View>
            <View>
              <Image source={require('../../assets/images/bloom.jpeg')} style={homeStyle.homeImg} />
            </View>
            <View>
              <Image source={require('../../assets/images/doug.jpg')} style={homeStyle.homeImg} />
            </View>
            <View>
              <Image source={require('../../assets/images/pho.jpeg')} style={homeStyle.homeImg} />
            </View>


          </Swiper>
        </View>
        <Text style={homeStyle.prog}>Nos Programmes</Text>
        <View style={homeStyle.imageContainer}>
          <Image source={require('../../assets/images/mard.jpeg')} style={homeStyle.horaireImg} />
          <Image source={require('../../assets/images/ven.jpeg')} style={homeStyle.horaireImg} />
          <Image source={require('../../assets/images/dim.jpeg')} style={homeStyle.horaireImg} />
        </View>
        <TouchableOpacity onPress={handleFormationPress}>
          <Image source={require('../../assets/images/formations.png')} style={homeStyle.formation} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleDonPress}>
          <Image source={require('../../assets/images/donat.png')} style={homeStyle.formation} />
        </TouchableOpacity>

        <TouchableOpacity onPress={handleVisionPress}>
          <Image source={require('../../assets/images/vision.png')} style={homeStyle.formation} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleDptPress}>
          <Image source={require('../../assets/images/dept.png')} style={homeStyle.formation} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleCellulePress}>
          <Image source={require('../../assets/images/cellules.jpeg')} style={homeStyle.formation} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleShopPress}>
          <Image source={require('../../assets/images/boutique.png')} style={homeStyle.formation} />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const homeStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  sliderContainer: {
    height: 300,
    marginBottom: 10,
  },
  homeImg: {
    width: '100%', // Assure que l'image prend toute la largeur
    height: 320,
    resizeMode: 'cover', // Ajuste l'image sans déformation
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
},
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    
  },
  horaireImg: {
    width: 130,
    height: 130,
    resizeMode: 'cover',
    marginRight: 0.5,
    marginBottom: 2,
    marginLeft: 0.5
  },
  prog: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20
  },
  formation: {
    width: '100%',
    height: 150,
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginBottom: 10,
    marginTop: 10
  },

  centeredText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowRadius: 10,
    position: 'absolute',
    color: '#F1D8C5', 
  },
  
  Avenir: {
    marginBottom : 5,
    marginRight: 0.5,
    marginLeft: 0.5,
    width: 200,
    height: 250,
    resizeMode: 'cover',
  }
});
