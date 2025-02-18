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
          height: 65,
          paddingTop: 6,
          backgroundColor: 'white',
          borderTopColor: '#e2e8f0',
          borderTopWidth: 1,
          elevation: 0,
        },
        tabBarActiveTintColor: '#3b82f6',
        tabBarInactiveTintColor: '#cbd5e1',
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="Home"
        options={{
          tabBarIcon: ({ color }) => (
            <View className="flex-1 items-center justify-center">
              <Ionicons name="stats-chart" size={24} color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="Plan"
        options={{
          tabBarIcon: ({ color }) => (
            <View className="flex-1 items-center justify-center">
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
            Vibration.vibrate(1);
            router.push('/modal/settings_modal');
          },
        }}
        options={{
          presentation: 'modal',
          tabBarIcon: ({ color }) => (
            <View className="flex-1 items-center justify-center">
              <Ionicons name="settings" size={24} color={color} />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
