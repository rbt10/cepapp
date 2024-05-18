import { View, Text, FlatList, StyleSheet, TouchableOpacity, Linking, ActivityIndicator, ImageBackground, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import { fetchPlaylists } from '@/api/fetchPlaylists';


const enseignements = () => {

    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const playlistId = 'ID_DE_LA_PLAYLIST'; // Assurez-vous que playlistId est correctement défini
      const fetchVideos = async () => {
        try {
          const videosData = await fetchPlaylists(playlistId );
          setVideos(videosData);
          setLoading(false);
        } catch (error) {
          console.error('Erreur lors du chargement des vidéos :', error);
          setLoading(false);
        }
      };
      fetchVideos(); 
    }, []);
    
  
    const fetchAllPlaylists = async (playlistId: string, nextPageToken = null, allVideos = []) => {
      try {
        const videosData = await fetchPlaylists(playlistId , nextPageToken);
        const updatedVideos = [...allVideos, ...videosData.items];
        if (videosData.nextPageToken) {
          // Récupérer la page suivante si disponible
          await fetchAllPlaylists(playlistId, videosData.nextPageToken, updatedVideos);
        } else {
          // Toutes les playlists ont été récupérées
          setVideos(updatedVideos);
          setLoading(false);
        }
      } catch (error) {
        console.error('Erreur lors du chargement des playlists :', error);
        setLoading(false);
      }
    };
  
    const handleVideoPress = (videoId) => {
      const playlistUrl = 'https://www.youtube.com/@CepResurrectionTV/playlists';
      Linking.openURL(playlistUrl);
    };
  
    if (loading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" color="#007bff" />
        </View>
      );
    }
  return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../../assets/images/ense.jpg')}
          style={styles.headerBackground}
        >
          <Text style={styles.title}>NOS ENSEIGNEMENTS PAR THÈME :</Text>
          <Text style={styles.subtitle}>
            Pour ne rien manquer, abonnez-vous et activez la cloche de notification sur YouTube
          </Text>
        </ImageBackground>
        <FlatList
          data={videos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.videoItem}
              onPress={() => handleVideoPress(item.snippet.resourceId.videoId)}
            >
              <Image
                source={{ uri: item.snippet.thumbnails.default.url }}
                style={styles.videoImage}
              />
              <Text style={styles.videoTitle}>{item.snippet.title}</Text>
            </TouchableOpacity>
          )}
          contentContainerStyle={styles.flatListContent}
        />
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
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#fff',
      textAlign: 'center',
      marginBottom: 10,
      textShadowColor: 'rgba(0, 0, 0, 0.5)',
      textShadowOffset: { width: 2, height: 2 },
      textShadowRadius: 5,
    },
    subtitle: {
      fontSize: 16,
      color: '#fff',
      textAlign: 'center',
      marginBottom: 20,
    },
    videoItem: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
    },
    videoImage: {
      width: 100,
      height: 100,
      marginRight: 20,
      borderRadius: 8,
    },
    videoTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      flex: 1,
    },
    flatListContent: {
      flexGrow: 1,
      paddingBottom: 20,
    },
  });


export default enseignements

