import { Tabs } from 'expo-router';
import { View, Vibration } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#030712',
          borderTopWidth: 1,
          borderTopColor: '#1F2937',
          paddingTop: 5,
          height: 65,
        },
        tabBarActiveTintColor: '#60A5FA',
        tabBarInactiveTintColor: '#9CA3AF',
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="Home"
        options={{
          tabBarIcon: ({ color, size }) => (
            <View className="items-center justify-center">
              <Ionicons name="stats-chart" size={24} color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="Plan"
        options={{
          tabBarIcon: ({ color, size }) => (
            <View className="items-center justify-center">
              <Ionicons name="fitness" size={24} color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="Settings"
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
            Vibration.vibrate(1); // Single millisecond vibration
            router.push('/modal/settings_modal');
          },
        }}
        options={{
          presentation: 'modal',
          tabBarIcon: ({ color, size }) => (
            <View className="items-center justify-center">
              <Ionicons name="settings" size={24} color={color} />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
