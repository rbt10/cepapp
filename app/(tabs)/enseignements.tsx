import { View, Text, FlatList, StyleSheet, TouchableOpacity, ActivityIndicator, ImageBackground, Image, Button } from 'react-native';
import React, { useState, useEffect, useCallback } from 'react';
import YoutubePlayer from "react-native-youtube-iframe";
import { fetchPlaylists, fetchVideosFromPlaylist } from '@/api/fetchPlaylists';

const Enseignements = () => {
  const [playlists, setPlaylists] = useState([]); // Stocke les playlists
  const [videos, setVideos] = useState([]); // Stocke les vidéos de la playlist sélectionnée
  const [selectedPlaylistId, setSelectedPlaylistId] = useState(null);
  const [selectedVideoId, setSelectedVideoId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const loadPlaylists = async () => {
      try {
        const playlistsData = await fetchPlaylists(); // Récupère les playlists
        setPlaylists(playlistsData);
        setLoading(false);
      } catch (error) {
        console.error('Erreur lors du chargement des playlists :', error);
        setLoading(false);
      }
    };
    loadPlaylists();
  }, []);

  // Charge les vidéos d'une playlist sélectionnée
  const handlePlaylistPress = async (playlistId) => {
    setLoading(true);
    try {
      const videosData = await fetchVideosFromPlaylist(playlistId);
      setVideos(videosData);
      setSelectedPlaylistId(playlistId);
      setSelectedVideoId(null);
    } catch (error) {
      console.error('Erreur lors du chargement des vidéos :', error);
    }
    setLoading(false);
  };

  // Démarrer la lecture d'une vidéo
  const handleVideoPress = (videoId) => {
    setSelectedVideoId(videoId);
    setPlaying(true);
  };

  // Pause / Play
  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  // Fermer le lecteur vidéo
  const closePlayer = () => {
    setPlaying(false);
    setSelectedVideoId(null);
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
      {/* En-tête */}
      <ImageBackground
        source={require('../../assets/images/ense.jpg')}
        style={styles.headerBackground}
      >
        <Text style={styles.title}>NOS ENSEIGNEMENTS</Text>
        <Text style={styles.subtitle}>
          Sélectionnez une playlist pour voir les vidéos disponibles
        </Text>
      </ImageBackground>

      {/* Lecteur YouTube */}
      {selectedVideoId && (
        <View style={styles.videoContainer}>
          <YoutubePlayer
            height={220}
            play={playing}
            videoId={selectedVideoId}
            onChangeState={(state) => {
              if (state === "ended") setPlaying(false);
            }}
          />
          <View style={styles.playerControls}>
            <Button title={playing ? "Pause" : "Play"} onPress={togglePlaying} />
            <Button title="Fermer" color="red" onPress={closePlayer} />
          </View>
        </View>
      )}

      {/* Liste des playlists */}
      {!selectedPlaylistId ? (
        <FlatList
          data={playlists}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.playlistItem}
              onPress={() => handlePlaylistPress(item.id)}
            >
              <Image
                source={{ uri: item.snippet.thumbnails.default.url }}
                style={styles.playlistImage}
              />
              <Text style={styles.playlistTitle}>{item.snippet.title}</Text>
            </TouchableOpacity>
          )}
          contentContainerStyle={styles.flatListContent}
        />
      ) : (
        /* Liste des vidéos d'une playlist sélectionnée */
        <FlatList
          data={videos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.videoItem}
              onPress={() => handleVideoPress(item.snippet.resourceId.videoId)}
            >
              <Image
                  source={{ uri: item.snippet.thumbnails?.default?.url || 'https://via.placeholder.com/100' }} 
                  style={styles.videoImage}
              />

              <Text style={styles.videoTitle}>{item.snippet.title}</Text>
            </TouchableOpacity>
          )}
          contentContainerStyle={styles.flatListContent}
        />
      )}

      {/* Bouton Retour aux playlists */}
      {selectedPlaylistId && (
        <TouchableOpacity style={styles.backButton} onPress={() => setSelectedPlaylistId(null)}>
          <Text style={styles.backButtonText}>← Retour aux playlists</Text>
        </TouchableOpacity>
      )}
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
  videoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  playerControls: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    gap: 10,
  },
  playlistItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  playlistImage: {
    width: 100,
    height: 100,
    marginRight: 20,
    borderRadius: 8,
  },
  playlistTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
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
  backButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#007bff',
    alignItems: 'center',
    marginHorizontal: 20,
    borderRadius: 8,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Enseignements;
