import { Tabs } from 'expo-router';
import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { FontAwesome5 } from '@expo/vector-icons';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
          name="eglises"
          options={{
            title: 'Nos églises',
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="globe" color={color} />,
          }}
        />
        <Tabs.Screen
          name="enseignements"
          options={{
            title: 'Enseignements',
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="book" color={color} />,
          }}
        />
        <Tabs.Screen
          name="formations"
          options={{
            title: 'Nos Formations',
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="graduation-cap" color={color} />,
          }}
        />
        <Tabs.Screen
        name="prier"
        options={{
          title: 'prier',
          tabBarIcon: ({ color }) => <FontAwesome5 size={28} name="pray" color={color} />,
        }}
      />
        
    </Tabs>
  );
}
