import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import centers from '@/api/visionData'; 


const VisionScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/images/vision.png')}
        style={styles.headerBackground} 
        imageStyle={{ resizeMode: 'cover' }}
      />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {centers && centers.length > 0 ? (
          // Vérifier si `centers` est défini et s'il contient des éléments
          centers.map((center, index) => (
              <View key={index} style={styles.centerContainer}>
                  <Text style={styles.title}>{center.title}</Text>
                  <Text style={styles.description}>{center.description}</Text>
                  <Text style={styles.verses}>{center.verses}</Text>
              </View>
            ))
          ) : (
            <Text style={styles.noDataText}>Aucun centre de vision trouvé</Text>
          )}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    headerBackground: {
      width: '100%',
      height: 200,
    },
    scrollViewContent: {
      padding: 20,
     
    },
    centerContainer: {
      marginBottom: 20,
      borderWidth: 1,
      borderColor: '#ccc',
      padding: 10,
      borderRadius: 8,
      backgroundColor: '#f1d8c4', // Couleur de fond crème
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 5,
      color: '#800080', // Couleur pourpre
    },
    description: {
      fontSize: 16,
      marginBottom: 10,
      color: '#4B0082', // Couleur violette
    },
    verses: {
      fontSize: 14,
      fontStyle: 'italic',
      color: '#800080', // Couleur pourpre
      marginBottom: 5,
    },
    noDataText: {
      fontSize: 16,
      fontStyle: 'italic',
      color: '#888',
      textAlign: 'center',
      marginTop: 20,
    },
  });
export default VisionScreen;
