import axios from 'axios';

const apiKey = 'AIzaSyBCLu1rHjgHq56QEptXbFKgYOPHWXs4WPg';
const channelId = 'UCngcXEixbhNGZlOQZT7K2bA';

// Récupère les playlists de la chaîne YouTube
export const fetchPlaylists = async () => {
  try {
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=${channelId}&maxResults=20&key=${apiKey}`
    );
    return response.data.items;
  } catch (error) {
    console.error('Erreur lors de la récupération des playlists :', error);
    return [];
  }
};

// 🔥 Nouvelle fonction : Récupère les vidéos d'une playlist spécifique
 export const fetchVideosFromPlaylist = async (playlistId) => {
  try {
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=20&key=${apiKey}`
    );
    return response.data.items;
  } catch (error) {
    console.error('Erreur lors de la récupération des vidéos de la playlist :', error);
    return [];
  }
};
