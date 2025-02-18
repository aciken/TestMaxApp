import { View, Text, ScrollView, TouchableOpacity, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';

export default function SettingsModal() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [biometrics, setBiometrics] = useState(false);

  return (
    <View className="flex-1 bg-gradient-to-b from-[#f8fafc] to-[#f0f9ff]">
      <SafeAreaView className="flex-1">
        {/* Header */}
        <View className="flex-row justify-between items-center px-6 py-4 border-b border-slate-100">
          <Text className="text-slate-900 text-xl font-bold">Settings</Text>
          <TouchableOpacity 
            onPress={() => router.back()}
            className="p-2 bg-slate-100 rounded-lg"
          >
            <Ionicons name="close" size={20} color="#64748b" />
          </TouchableOpacity>
        </View>

        <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
          {/* Profile Section */}
          <View className="px-5 py-6">
            <View className="flex-row items-center bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-sm shadow-blue-50 border border-blue-50">
              <View className="w-12 h-12 bg-blue-50 rounded-xl items-center justify-center">
                <Text className="text-blue-600 text-xl font-bold">JD</Text>
              </View>
              <View className="ml-4 flex-1">
                <Text className="text-slate-800 font-semibold">John Doe</Text>
                <Text className="text-slate-500 text-sm mt-1">Age: 28 • Weight: 180 lbs</Text>
              </View>
              <TouchableOpacity className="w-8 h-8 bg-blue-50 rounded-lg items-center justify-center">
                <Ionicons name="pencil-outline" size={16} color="#3b82f6" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Settings Groups */}
          <View className="px-6 space-y-6">
            <View className="space-y-4">
              <Text className="text-slate-400 text-xs font-medium uppercase">App Settings</Text>
              <View className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-sm shadow-blue-50 border border-blue-50">
                <SettingItem
                  icon="notifications-outline"
                  iconColor="#3b82f6"
                  bgColor="bg-blue-50"
                  title="Notifications"
                  subtitle="Reminders & updates"
                  isSwitch
                  value={notifications}
                  onValueChange={setNotifications}
                />
                <View className="h-px bg-slate-100 my-3" />
                <SettingItem
                  icon="fitness-outline"
                  title="Workout Tracking"
                  subtitle="Connect fitness apps"
                  isSwitch
                  value={true}
                />
                <View className="h-px bg-slate-100 my-3" />
                <SettingItem
                  icon="calendar-outline"
                  title="Test Reminders"
                  subtitle="Schedule blood work"
                  isSwitch
                  value={true}
                />
              </View>
            </View>

            <View className="space-y-4">
              <Text className="text-slate-400 text-xs font-medium uppercase">Data & Privacy</Text>
              <View className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-sm shadow-blue-50 border border-blue-50">
                <SettingItem
                  icon="analytics-outline"
                  title="Export Health Data"
                  subtitle="Download your progress"
                  onPress={() => {}}
                />
                <View className="h-px bg-slate-100 my-3" />
                <SettingItem
                  icon="shield-checkmark-outline"
                  title="Privacy Settings"
                  subtitle="Manage your data"
                  onPress={() => {}}
                />
                <View className="h-px bg-slate-100 my-3" />
                <SettingItem
                  icon="log-out-outline"
                  title="Logout"
                  onPress={() => {
                    router.back();
                    router.replace('/');
                  }}
                  color="red"
                />
              </View>
            </View>

            {/* App Version */}
            <View className="py-8 items-center">
              <Text className="text-slate-500 text-sm">Version 1.0.0</Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const SettingItem = ({ 
  icon, 
  title, 
  subtitle, 
  isSwitch, 
  value, 
  onValueChange, 
  onPress,
  color = 'default',
  iconColor = '#64748b',
  bgColor = 'bg-slate-100'
}) => {
  const colors = {
    red: {
      icon: '#ef4444',
      bg: 'bg-red-500/20',
    },
    default: {
      icon: '#64748b',
      bg: 'bg-slate-100',
    }
  };

  return (
    <TouchableOpacity 
      className="flex-row items-center justify-between py-2"
      onPress={onPress}
      disabled={isSwitch}
    >
      <View className="flex-row items-center flex-1">
        <View className={`w-10 h-10 ${bgColor} rounded-lg items-center justify-center`}>
          <Ionicons name={icon} size={20} color={iconColor} />
        </View>
        <View className="ml-4 flex-1">
          <Text className={`${color === 'red' ? 'text-red-400' : 'text-slate-900'} font-medium`}>
            {title}
          </Text>
          {subtitle && <Text className="text-slate-500 text-sm mt-1">{subtitle}</Text>}
        </View>
      </View>
      {isSwitch ? (
        <Switch
          value={value}
          onValueChange={onValueChange}
          trackColor={{ false: '#1e293b', true: '#1e3a8a' }}
          thumbColor={value ? '#60a5fa' : '#64748b'}
        />
      ) : (
        <Ionicons 
          name="chevron-forward" 
          size={18} 
          color={color === 'red' ? '#ef4444' : '#64748b'} 
        />
      )}
    </TouchableOpacity>
  );
};
