// NotificationService.ts
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';

async function requestPermissions(): Promise<void> {
  const { status } = await Notifications.getPermissionsAsync();
  if (status !== 'granted') {
    await Notifications.requestPermissionsAsync();
  }
}

async function scheduleNotifications(): Promise<void> {
  await requestPermissions();

  // Les horaires sont en UTC, donc ajuste les heures selon ton fuseau horaire
  const notifications = [
    {
      title: 'Culte d\'enseignement',
      body: 'Rappel : Culte d\'enseignement ce mardi à 19h.',
      trigger: {
        weekday: 2, // Mardi
        hour: 19,
        minute: 0,
        repeats: true, // Répétition hebdomadaire
      },
    },
    {
      title: 'Intercession',
      body: 'Rappel : Intercession ce vendredi à 19h.',
      trigger: {
        weekday: 5, // Vendredi
        hour: 19,
        minute: 0,
        repeats: true, // Répétition hebdomadaire
      },
    },
    {
      title: 'Culte de célébration',
      body: 'Rappel : Culte de célébration ce dimanche à 11h.',
      trigger: {
        weekday: 7, // Dimanche
        hour: 11,
        minute: 0,
        repeats: true, // Répétition hebdomadaire
      },
    },
  ];

  for (const notification of notifications) {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: notification.title,
        body: notification.body,
      },
      trigger: notification.trigger,
    });
  }
}

export { scheduleNotifications };
