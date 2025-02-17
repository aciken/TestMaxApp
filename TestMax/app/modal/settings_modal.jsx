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
    <View className="flex-1 bg-slate-950">
      <SafeAreaView className="flex-1">
        {/* Header */}
        <View className="flex-row justify-between items-center px-6 py-4 border-b border-slate-800">
          <Text className="text-white text-2xl font-bold">Settings</Text>
          <TouchableOpacity 
            onPress={() => router.back()}
            className="p-2"
          >
            <Ionicons name="close" size={24} color="#94a3b8" />
          </TouchableOpacity>
        </View>

        <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
          {/* Profile Section */}
          <View className="px-6 py-8">
            <View className="flex-row items-center">
              <View className="w-16 h-16 bg-indigo-900/30 rounded-2xl items-center justify-center border border-indigo-800/50">
                <Text className="text-indigo-400 text-xl font-bold">JD</Text>
              </View>
              <View className="ml-4 flex-1">
                <Text className="text-white text-lg font-semibold">John Doe</Text>
                <Text className="text-slate-400 text-sm mt-1">john.doe@example.com</Text>
              </View>
              <TouchableOpacity className="p-2">
                <Ionicons name="pencil" size={20} color="#94a3b8" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Settings Groups */}
          <View className="px-6 space-y-8">
            {/* Preferences */}
            <View className="space-y-6">
              <Text className="text-slate-500 text-xs font-medium uppercase tracking-wider">Preferences</Text>
              <View className="bg-slate-800 rounded-xl p-4 border border-slate-700/50">
                <SettingItem
                  icon="notifications-outline"
                  title="Notifications"
                  subtitle="Manage push notifications"
                  isSwitch
                  value={notifications}
                  onValueChange={setNotifications}
                />
                <View className="h-px bg-slate-700/50 my-3" />
                <SettingItem
                  icon="moon-outline"
                  title="Dark Mode"
                  subtitle="System settings"
                  isSwitch
                  value={darkMode}
                  onValueChange={setDarkMode}
                />
                <View className="h-px bg-slate-700/50 my-3" />
                <SettingItem
                  icon="finger-print-outline"
                  title="Biometric Login"
                  subtitle="Use Face ID/Touch ID"
                  isSwitch
                  value={biometrics}
                  onValueChange={setBiometrics}
                />
              </View>
            </View>

            {/* Account */}
            <View className="space-y-6">
              <Text className="text-slate-500 text-xs font-medium uppercase tracking-wider">Account</Text>
              <View className="bg-slate-800 rounded-xl p-4 border border-slate-700/50">
                <SettingItem
                  icon="lock-closed-outline"
                  title="Security"
                  subtitle="Change password and 2FA"
                  onPress={() => console.log("Security")}
                />
                <View className="h-px bg-slate-700/50 my-3" />
                <SettingItem
                  icon="mail-outline"
                  title="Email Preferences"
                  onPress={() => console.log("Email prefs")}
                />
                <View className="h-px bg-slate-700/50 my-3" />
                <SettingItem
                  icon="card-outline"
                  title="Billing"
                  subtitle="Update payment methods"
                  onPress={() => console.log("Billing")}
                />
              </View>
            </View>

            {/* Support */}
            <View className="space-y-6">
              <Text className="text-slate-500 text-xs font-medium uppercase tracking-wider">Support</Text>
              <View className="bg-slate-800 rounded-xl p-4 border border-slate-700/50">
                <SettingItem
                  icon="help-circle-outline"
                  title="Help Center"
                  onPress={() => console.log("Help")}
                />
                <View className="h-px bg-slate-700/50 my-3" />
                <SettingItem
                  icon="document-text-outline"
                  title="Terms & Privacy"
                  onPress={() => console.log("Terms")}
                />
              </View>
            </View>

            {/* App Version */}
            <View className="py-8 items-center">
              <Text className="text-slate-500 text-sm">Version 1.0.0</Text>
              <Text className="text-slate-600 text-xs mt-2">© 2024 TestMax</Text>
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
  onPress 
}) => (
  <TouchableOpacity 
    className="flex-row items-center justify-between py-3"
    onPress={onPress}
    disabled={isSwitch}
  >
    <View className="flex-row items-center flex-1">
      <View className="w-10 h-10 bg-indigo-900/30 rounded-lg items-center justify-center">
        <Ionicons name={icon} size={20} color="#818cf8" />
      </View>
      <View className="ml-4 flex-1">
        <Text className="text-white font-medium">{title}</Text>
        {subtitle && <Text className="text-slate-400 text-sm mt-1">{subtitle}</Text>}
      </View>
    </View>
    {isSwitch ? (
      <Switch
        value={value}
        onValueChange={onValueChange}
        trackColor={{ false: '#1e293b', true: '#3730a3' }}
        thumbColor={value ? '#4f46e5' : '#64748b'}
      />
    ) : (
      <Ionicons name="chevron-forward" size={20} color="#64748b" />
    )}
  </TouchableOpacity>
);
