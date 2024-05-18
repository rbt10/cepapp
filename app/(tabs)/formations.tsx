import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, ImageBackground, TouchableOpacity, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import formationData from '@/api/formationData';

const formations = () => {
  const navigation = useNavigation();
  const [expandedId, setExpandedId] = useState(null);

  const handleFormationPress = (item) => {
    setExpandedId(expandedId === item.id ? null : item.id);
  };

  const handleSignUpPress = () => {
    Linking.openURL('https://cep-resurrection.org/contact/');
  };

  const renderFormationItem = ({ item }) => {
    const isExpanded = expandedId === item.id;
    return (
      <TouchableOpacity style={styles.formationItem} onPress={() => handleFormationPress(item)}>
        <View style={styles.imageContainer}>
          <ImageBackground
            source={item.image}
            style={styles.image}
            imageStyle={{ borderRadius: 10 }}
          >
            <Text style={styles.imageTitle}>{item.title}</Text>
          </ImageBackground>
        </View>
        {isExpanded && (
          <View style={styles.detailsContainer}>
            <Text style={styles.detailsText}>{item.description}</Text>
            <TouchableOpacity style={styles.signupButton} onPress={handleSignUpPress}>
              <Text style={styles.signupButtonText}>S'inscrire</Text>
            </TouchableOpacity>
          </View>
        )}
      </TouchableOpacity>
    );
  };

  const renderHeader = () => (
    <View style={styles.header}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <FontAwesome name="arrow-left" size={24} color="#fff" />
      </TouchableOpacity>
      <ImageBackground
        source={require('../../assets/images/formations.png')}
        style={styles.headerBackground}
        imageStyle={{ resizeMode: 'cover' }}
      >
        {/* Contenu en-tête si nécessaire */}
      </ImageBackground>
    </View>
  );

  return (
    <View style={styles.container}>
      {renderHeader()}
      <FlatList
        data={formationData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderFormationItem}
        contentContainerStyle={styles.formationsList}
        numColumns={1} // Une image par ligne
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header: {
    backgroundColor: '#007bff',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    padding: 10,
  },
  headerBackground: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formationsList: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  formationItem: {
    marginBottom: 16,
  },
  imageContainer: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 140,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10,
  },
  detailsContainer: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  detailsText: {
    fontSize: 14,
    color: '#000',
  },
  signupButton: {
    backgroundColor: '#b62847',
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  signupButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default formations;
