import { View, Text, FlatList, StyleSheet, TouchableOpacity, ActivityIndicator, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import { fetchPlaylists } from '@/api/fetchPlaylists'; // Assure-toi que cette fonction est bien définie

const VideosScreen = ({ route, navigation }) => {
  const { playlistId } = route.params;
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const videosData = await fetchPlaylists(playlistId); // Récupère les vidéos d'une playlist spécifique
        setVideos(videosData);
        setLoading(false);
      } catch (error) {
        console.error('Erreur lors du chargement des vidéos :', error);
        setLoading(false);
      }
    };
    fetchVideos();
  }, [playlistId]);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#007bff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vidéos de la Playlist</Text>
      <FlatList
        data={videos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.videoItem}
            onPress={() => navigation.navigate('VideoPlayer', { videoId: item.id })}
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
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

export default VideosScreen;
