import { View, Text, ScrollView, Image, TouchableOpacity, Linking,StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Swiper from 'react-native-swiper';


export default function Home() {
  const navigation = useNavigation();

  const handleFormationPress = () => {
    navigation.navigate('formations'); // Naviguer vers l'écran des formations0
  };

  const handleDptPress = () => {
    navigation.navigate('ChurchDepartmentsTable'); // Naviguer vers l'écran des départements
  };

  const handleVisionPress = () => {
    navigation.navigate('VisionScreen'); // Naviguer vers l'écran de la vision
  };

  const handleDonPress = () => {
    navigation.navigate('DonationScreen'); // Naviguer vers l'écran des dons
  };

  const handleShopPress = () => {
    const shopUrl = 'https://cep-resurrection.org/boutique/';
    Linking.openURL(shopUrl); // Ouvrir l'URL dans le navigateur externe
  };

  return (
    <View  style={homeStyle.container}>
       <Image source={require('../../assets/images/logo.png')} style={homeStyle.logo} />
       <ScrollView>
      {/* En-tête avec le logo */}
      <View>
       
        <Swiper style={homeStyle.sliderContainer} autoplay={true} autoplayTimeout={3}>
          <View>
            <Image source={require('../../assets/images/ann.jpeg')} style={homeStyle.homeImg} />
          </View>
          <View>
            <Image source={require('../../assets/images/mag.jpeg')}style={homeStyle.homeImg} />
          </View>
          <View>
            <Image source={require('../../assets/images/sis.jpg')} style={homeStyle.homeImg} />
          </View>
        </Swiper>
      </View>

      {/* Contenu restant de la page */}
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
        <Image source={require('../../assets/images/dons.png')} style={homeStyle.formation} />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleVisionPress}>
        <Image source={require('../../assets/images/vision.png')} style={homeStyle.formation} />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleDptPress}>
        <Image source={require('../../assets/images/dept.png')} style={homeStyle.formation} />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleShopPress}>
        <Image source={require('../../assets/images/bout.jpeg')} style={homeStyle.formation} />
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
    height: 200,
    marginBottom: 10,
  },
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slideImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 8,
  },
  homeImg: {
    width: 450,
    height: 240,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', // Alignement vertical au centre
    padding: 5,
  },
  horaireImg: {
    width: 130,
    height: 130,
    resizeMode: 'cover',
  },
  prog: {
    
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
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
    marginTop: 40, // Ajustez cette valeur pour définir l'espace en haut du logo
  },
});