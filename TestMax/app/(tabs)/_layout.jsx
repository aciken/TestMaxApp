import { Tabs } from 'expo-router';
import { View } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'white',
          borderTopWidth: 1,
          borderTopColor: '#E5E7EB',
          paddingTop: 5,
          height: 65,
        },
        tabBarActiveTintColor: '#2563EB',
        tabBarInactiveTintColor: '#6B7280',
      }}
    >
      <Tabs.Screen
        name="Home"
        options={{
          title: 'Dashboard',
          tabBarIcon: ({ color }) => (
            <View className={`w-6 h-6 items-center justify-center ${color === '#2563EB' ? 'opacity-100' : 'opacity-70'}`}>
              <View className="w-4 h-4 border-2 rounded-lg" style={{ borderColor: color }} />
              <View className="absolute w-2 h-2 bg-current rounded-sm" style={{ backgroundColor: color }} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="Plan"
        options={{
          title: 'My Plan',
          tabBarIcon: ({ color }) => (
            <View className={`w-6 h-6 items-center justify-center ${color === '#2563EB' ? 'opacity-100' : 'opacity-70'}`}>
              <View className="w-4 h-3 border-2 rounded-sm" style={{ borderColor: color }} />
              <View className="absolute w-2 h-0.5 top-3" style={{ backgroundColor: color }} />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
