import axios from 'axios';

const apiKey = 'AIzaSyBCLu1rHjgHq56QEptXbFKgYOPHWXs4WPg';
const channelId = 'UCngcXEixbhNGZlOQZT7K2bA';
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

