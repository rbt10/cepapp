import { View, StyleSheet } from 'react-native';
import React from 'react';
import { WebView } from 'react-native-webview';

const videoPlayer = ({ route }) => {
  const { videoId } = route.params;

  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: `https://www.youtube.com/embed/${videoId}?autoplay=1` }} // Utilise l'URL d'intégration YouTube
        style={styles.video}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  video: {
    width: '100%',
    height: '100%',
  },
});

export default videoPlayer;
